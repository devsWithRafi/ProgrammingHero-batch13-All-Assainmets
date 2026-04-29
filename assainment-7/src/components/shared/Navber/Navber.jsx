'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import ActiveNavLink from './ActiveNavLink';
import { RiHome3Line } from 'react-icons/ri';
import { IoTimeOutline } from 'react-icons/io5';
import { GoGraph } from 'react-icons/go';
import { RiMenuFill } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import { cn } from '@/lib/utils';
import { assets } from '@/assets/assets';
import Image from 'next/image';

const navList = [
  {
    name: 'Home',
    path: '/',
    icon: RiHome3Line,
  },
  {
    name: 'Timeline',
    path: '/timeline',
    icon: IoTimeOutline,
  },
  {
    name: 'Stats',
    path: '/stats',
    icon: GoGraph,
  },
];

const Navber = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full z-[99999] font-poppins bg-white py-5 px-4 border-b border-gray-200 fixed left-0 top-0">
      <nav className="max-w-[1500px] mx-auto flex flex-col">
        {/* NAV TOP - DESKTOP */}
        <div className="w-full flex items-center justify-between gap-5">
          {/* NAV  TOP LEFT */}
          <Link href="/" className="font-bold text-2xl">
            <Image
              src={assets.logoPng}
              alt="nav-logo"
              width={141}
              height={31}
            />
          </Link>

          {/* NAV TOP RIGHT */}
          <div className="sm:flex hidden items-center">
            {navList.map((item, index) => (
              <ActiveNavLink key={index} href={item.path}>
                <item.icon size={index === navList.length - 1 ? 16 : 20} />
                {item.name}
              </ActiveNavLink>
            ))}
          </div>

          {/* MOBILE MENU */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="cursor-pointer sm:hidden hover:text-[#244D3F] relative flex items-center justify-center"
          >
            <RiMenuFill
              size={20}
              className={cn(
                'opacity-100 duration-300',
                mobileMenuOpen && 'opacity-0',
              )}
            />
            <RxCross2
              size={22}
              className={cn(
                'opacity-0 absolute duration-300',
                mobileMenuOpen && 'opacity-100',
              )}
            />
          </button>
        </div>

        {/* NAV BOTTOM - MOBILE MENU */}
        <div
          className={cn(
            'sm:hidden flex flex-col overflow-hidden max-h-0 opacity-0 transition-all duration-300',
            mobileMenuOpen && 'mt-5 max-h-100 opacity-100',
          )}
        >
          {navList.map((item, index) => (
            <ActiveNavLink key={index} href={item.path}>
              <item.icon size={index === navList.length - 1 ? 16 : 20} />
              {item.name}
            </ActiveNavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navber;
