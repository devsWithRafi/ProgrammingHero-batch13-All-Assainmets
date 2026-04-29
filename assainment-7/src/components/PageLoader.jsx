import { cn } from '@/lib/utils';
import React from 'react';
import { PuffLoader } from 'react-spinners';

const PageLoader = ({ className }) => {
  return (
    <div
      className={cn(
        'w-full h-screen flex items-center justify-center',
        className,
      )}
    >
      <PuffLoader color="green" />
    </div>
  );
};

export default PageLoader;
