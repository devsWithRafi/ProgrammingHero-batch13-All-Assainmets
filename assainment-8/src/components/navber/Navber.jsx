'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'All Books', link: '/books' },
  { name: 'My Profile', link: '/profile' },
];

const Navber = () => {
  const pathname = usePathname();

  return (
    <header className="w-full shadow-sm">
      <nav className="w-full max-w-[1500px] mx-auto p-4 flex items-center justify-between gap-5">
        {/* NAV LEFT */}
        <Link href={'/'} className="font-bold text-lg text-[#312E81] font-lora">
          Atheneum
        </Link>

        {/* NAV MIDDLE */}
        <div className="flex items-center text-sm font-medium font-poppins">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`font-medium px-4 border-b-2 duration-300 hover:text-[#059669]
              ${pathname === item.link ? 'text-[#059669] border-[#059669]' : 'border-transparent text-zinc-500'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* NAV RIGHT */}
        <div>
          <Link
            href={'/login'}
            className="bg-[#059669] font-poppins font-medium text-sm text-white px-4 py-1.5 rounded"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navber;
