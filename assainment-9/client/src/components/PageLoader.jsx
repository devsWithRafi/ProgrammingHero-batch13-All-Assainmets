import { cn } from '@/lib/utils';
import React from 'react';
import { SiWikibooks } from 'react-icons/si';

const PageLoader = ({ className }) => {
  return (
    <div className={cn('flex items-center justify-center w-screen h-screen', className)}>
      <span className="bg-primary text-white dark:text-black p-4 sm:text-lg text-lg rounded-full animate-pulse">
        <SiWikibooks className='size-7'/>
      </span>
    </div>
  );
};

export default PageLoader;
