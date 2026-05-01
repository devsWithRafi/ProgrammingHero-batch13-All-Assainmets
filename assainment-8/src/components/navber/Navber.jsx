'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ButtonBlack from '../Button';

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'All Books', link: '/books' },
  { name: 'My Profile', link: '/profile' },
];

const Navber = () => {
  const pathname = usePathname();

  return (
    <header className="z-[99999] fixed top-0 bg-white w-full shadow-sm">
      <nav className="w-full max-w-[1500px] mx-auto px-4 py-3 flex items-center justify-between gap-5">
        {/* NAV LEFT */}
        <Link
          href={'/'}
          className="font-semibold text-xl tracking-wide text-black font-ring"
        >
          Atheneum
        </Link>

        {/* NAV MIDDLE */}
        <div className="flex items-center text-sm font-medium font-poppins">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`font-medium px-4 border-b-2 duration-300 hover:text-black
              ${pathname === item.link ? 'text-black border-black' : 'border-transparent text-zinc-500'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* NAV RIGHT */}
        <div>
          <Link href={'/auth/signin'}>
            <ButtonBlack className={'py-4'}>Login</ButtonBlack>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navber;

// https://dribbble.com/shots/26886468-ReBook-Book-Curation-Platform