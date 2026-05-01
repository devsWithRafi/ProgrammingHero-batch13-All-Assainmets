import Link from 'next/link';
import React from 'react';
import ButtonBlack from '../Button';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const NavMobile = ({ navItems, handleSignOut, isNavOpen, user }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'sm:hidden flex flex-col duration-300 overflow-hidden',
        isNavOpen ? 'mt-5 max-h-100 opacity-100' : 'max-h-0 opacity-0',
      )}
    >
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className={cn(
            'text-sm border-b border-gray-200 duration-200 py-2 font-poppins font-medium text-zinc-500 hover:text-black',
            pathname === item.link && 'text-black border-black',
          )}
        >
          {item.name}
        </Link>
      ))}

      {!user ? (
        <ButtonBlack
          onClick={() => router.push('/auth/signin')}
          className={
            'py-3.5 sm:px-5 px-3 sm:max-h-max max-h-4 sm:text-sm text-xs mt-5 w-full hover:scale-100'
          }
        >
          Login
        </ButtonBlack>
      ) : (
        <ButtonBlack
          onClick={handleSignOut}
          className={
            'py-3.5 sm:px-5 px-3 sm:max-h-max max-h-4 sm:text-sm text-xs mt-5 w-full hover:scale-100'
          }
        >
          Logout
        </ButtonBlack>
      )}
    </div>
  );
};

export default NavMobile;
