import { cn } from '@/lib/utils';
import React from 'react';
import { LuLoader } from 'react-icons/lu';

const Loading = ({ className, text }) => {
  return (
    <span
      className={cn(
        'flex items-center text-zinc-400 text-sm font-poppins gap-2',
        className,
      )}
    >
      <LuLoader className="animate-spin size-4" />
      {text}
    </span>
  );
};

export default Loading;
