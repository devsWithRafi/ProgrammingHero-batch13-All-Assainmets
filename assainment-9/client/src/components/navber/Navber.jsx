'use client';

import Link from 'next/link';
import Logo from '../Logo';
import { ThemeToggle } from '../ui/ThemeToggle';
import { navItems } from './navItems';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { BiMenu } from "react-icons/bi";



const Navber = () => {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white dark:bg-black sticky top-0 z-50 flex flex-col items-center justify-center border-b">
      <nav className="w-full max-w-[1500px] mx-auto h-[65px] px-3.5 flex items-center gap-5 justify-between">
        <Link href={'/'}>
          <Logo />
        </Link>

        <div className="md:flex hidden items-center gap-3">
          {navItems.map((item, index) => (
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
          ))}
        </div>

        <div className='flex items-center sm:gap-2 gap-5'>
          <ThemeToggle />
          <Link href={'/sign-in'} className={cn(buttonVariants({variant: 'outline'}), 'md:flex hidden')}>Login</Link>
          <Link href={'/sign-up'} className={cn(buttonVariants(), 'md:flex hidden')}>Sign Up</Link>
          <button className='md:hidden'>
            <BiMenu size={30}/>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navber;
