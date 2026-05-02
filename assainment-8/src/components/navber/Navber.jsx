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
          router.push('/auth/signin');
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
              className="font-semibold sm:text-xl text-md tracking-wide text-black font-ring"
            >
              Atheneum
            </Link>
          </span>

          {/* NAV MIDDLE */}
          <div className="sm:flex hidden items-center text-sm font-medium font-poppins">
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
              <ButtonBlack
                onClick={() => router.push('/auth/signin')}
                className={
                  'py-3.5 sm:px-5 px-3 sm:max-h-max max-h-4 sm:text-sm text-xs sm:flex hidden'
                }
              >
                Login
              </ButtonBlack>
            ) : (
              <>
                <h3 className="font-viga font-bold text-md">{usersName}</h3>

                <ButtonBlack
                  onClick={handleSignOut}
                  className={
                    'py-3.5 sm:px-5 px-3 sm:max-h-max max-h-4 sm:text-sm text-xs sm:flex hidden'
                  }
                >
                  Logout
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
