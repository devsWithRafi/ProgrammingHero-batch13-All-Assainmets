'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import ButtonBlack from '../Button';
import { authClient } from '@/lib/auth-client';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { cn } from '@/lib/utils';
import NavMobile from './NavMobile';
import { Avatar, toast } from '@heroui/react';
import { RiLogoutCircleLine } from 'react-icons/ri';


const navItems = [
  { name: 'Home', link: '/' },
  { name: 'All Books', link: '/books' },
  { name: 'My Profile', link: '/profile' },
];

const Navber = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { data } = authClient.useSession();
  const user = data?.user;

  const usersName =
    user?.name.split(' ').length > 2
      ? user?.name.split(' ').slice(0, 2).join(' ')
      : user?.name;

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        credentials: 'include',
        onSuccess: () => {
          toast.success('Signed out successfully!');
          router.push('/auth/signin');
        },
        onError: () => {
          toast.danger('Signed out failed!');
        },
      },
    });
  };

  return (
    <header className="z-[999] fixed top-0 bg-white w-full shadow-sm">
      <nav className="w-full max-w-[1500px] mx-auto px-4 py-3 flex flex-col">
        <div className="w-full flex items-center justify-between gap-5">
          {/* NAV LEFT */}
          <span className="flex items-center gap-3">
            <button
              onClick={() => setIsNavOpen((prev) => !prev)}
              className="relative sm:hidden flex items-center justify-center"
            >
              {!isNavOpen ? <FiMenu size={20} /> : <RxCross2 size={20} />}
            </button>
            <Link
              href={'/'}
              className="flex items-center font-semibold sm:text-xl text-lg tracking-wide text-transparent bg-clip-text font-ring bg-gradient-to-br from-gray-900 to-gray-200"
            >
              Atheneum
            </Link>
          </span>

          {/* NAV MIDDLE */}
          <div className="sm:flex gap-3 hidden items-center text-sm font-medium font-poppins">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={cn(
                  'font-medium px-2 border-b-2 duration-300 hover:text-black',
                  pathname === item.link
                    ? 'text-black border-black'
                    : 'border-transparent text-zinc-500',
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* NAV RIGHT */}
          <div className="flex items-center gap-4">
            {!user ? (
              <>
                <ButtonBlack
                  onClick={() => router.push('/auth/signin')}
                  className="py-3.5 sm:px-5 px-3 sm:max-h-max max-h-4 sm:text-sm text-xs sm:flex hidden rounded-xl"
                >
                  Login
                </ButtonBlack>
                <ButtonBlack
                  onClick={() => router.push('/auth/signup')}
                  buttonType='outline'
                  className="py-3.5 sm:px-5 px-3 sm:max-h-max max-h-4 sm:text-sm text-xs sm:flex hidden rounded-xl"
                >
                  Sign Up
                </ButtonBlack>
              </>
            ) : (
              <>
                <h3 className="font-viga font-bold text-xl text-zinc-800">
                  {usersName}
                </h3>
                <Link
                  href="/profile"
                  className="bg-gray-300 p-0.5 rounded-full"
                >
                  <Avatar size="sm">
                    <Avatar.Image
                      src={user?.image}
                      alt="avater"
                      className="object-cover"
                    />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                </Link>
                <ButtonBlack
                  onClick={handleSignOut}
                  buttonType="outline"
                  className="py-3.5 sm:px-5 px-3 sm:max-h-max max-h-4 sm:text-sm text-xs sm:flex hidden rounded-xl hover:bg-black hover:text-white"
                >
                  <RiLogoutCircleLine />
                  LogOut
                </ButtonBlack>
              </>
            )}
          </div>
        </div>

        {/* nav mobile */}
        <NavMobile
          navItems={navItems}
          handleSignOut={handleSignOut}
          isNavOpen={isNavOpen}
          user={user}
        />
      </nav>
    </header>
  );
};

export default Navber;
