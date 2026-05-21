'use client';

import Link from 'next/link';
import Logo from '../Logo';
import { ThemeToggle } from '../ui/ThemeToggle';
import { navItems } from './navItems';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { BiMenu } from 'react-icons/bi';
import { useSession } from '@/lib/auth-client';
import NavAvatar from './NavAvatar';
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import NavMobile from './NavMobile';

const Navber = () => {
  const pathname = usePathname();
  const { data } = useSession();
  const user = data?.user;

  const [navMobileOpen, setNavMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 dark:bg-black/70 backdrop-blur-[40px] fixed top-0 z-50 flex flex-col items-center justify-center border-b">
      <nav className="w-full max-w-[1500px] mx-auto h-[65px] px-3.5 flex items-center gap-5 justify-between">
        <Link href={'/'}>
          <Logo />
        </Link>

        <div className="md:flex hidden items-center gap-3">
          {navItems.map((item, index) => {
            const access =
              item.access === 'public' || (item.access === 'privet' && user);
            if (!access) return null;
            return (
              <Link
                key={index}
                href={item.path}
                className={cn(
                  'font-viga text-sm duration-200 text-zinc-500 hover:text-primary border-b-2 border-transparent px-1',
                  pathname === item.path && 'text-primary border-primary',
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center sm:gap-2 gap-5">
          <ThemeToggle />
          {!user ? (
            <>
              <Link
                href={'/sign-in'}
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'md:flex hidden',
                )}
              >
                Login
              </Link>
              <Link
                href={'/sign-up'}
                className={cn(buttonVariants(), 'md:flex hidden')}
              >
                Sign Up
              </Link>
            </>
          ) : (
            <NavAvatar user={user} />
          )}
          <button
            onClick={() => setNavMobileOpen((prev) => !prev)}
            className="md:hidden"
          >
            {navMobileOpen ? <RxCross2 size={30} /> : <BiMenu size={30} />}
          </button>
        </div>
      </nav>

      {/* nav mobile */}
      <NavMobile isOpen={navMobileOpen} user={user} />
    </header>
  );
};

export default Navber;
