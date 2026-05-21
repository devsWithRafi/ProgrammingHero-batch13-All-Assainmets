'use client';

import Link from 'next/link';
import { Separator } from '../ui/separator';
import { navItems } from './navItems';
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';
import { Button, buttonVariants } from '../ui/button';

const NavMobile = ({ isOpen, user }) => {
  const pathname = usePathname();

  const router = useRouter();

  const handleLogOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success('Signed out successfully!', {
            position: 'top-center',
          });
          router.push('/sign-in');
        },
        onError: (ctx) => {
          toast.error(ctx.error?.message || 'Signed out successfully!', {
            position: 'top-center',
          });
        },
      },
    });
  };

  return (
    <nav
      className={cn(
        'w-full max-w-[1500px] mx-auto px-3.5 overflow-hidden duration-300 md:hidden flex flex-col',
        isOpen ? 'max-h-screen py-3.5 opacity-100' : 'py-0 max-h-0 opacity-0',
      )}
    >
      <div className="flex flex-col">
        {navItems.map((item, index) => {
          const access =
            item.access === 'public' || (item.access === 'privet' && user);
          if (!access) return null;
          return (
            <span key={index} className="">
              <Link
                href={item.path}
                className={cn(
                  'font-viga text-sm duration-200 text-zinc-500 hover:text-primary',
                  pathname === item.path && 'text-primary',
                )}
              >
                {item.name}
              </Link>
              <Separator className="my-2" />
            </span>
          );
        })}
      </div>

      <div className="flex flex-col gap-2 mt-4">
        {!user ? (
          <>
            <Link
              href={'/sign-in'}
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'w-full rounded-full',
              )}
            >
              Login
            </Link>
            <Link
              href={'/sign-up'}
              className={cn(buttonVariants(), 'w-full rounded-full')}
            >
              Sign Up
            </Link>
          </>
        ) : (
          <Button onClick={handleLogOut} className={'w-full rounded-full'}>
            LogOut
          </Button>
        )}
      </div>
    </nav>
  );
};

export default NavMobile;
