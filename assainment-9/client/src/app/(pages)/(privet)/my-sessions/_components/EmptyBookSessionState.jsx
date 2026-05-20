import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CalendarX2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const EmptyBookSessionState = () => {
  return (
    <div className="mt-10 w-full border-2 px-5 sm:py-20 py-10 flex flex-col items-center justify-center gap-4 text-center rounded-xl border-dashed">
      <span className="p-5 rounded-full bg-muted aspect-square text-muted-foreground">
        <CalendarX2 />
      </span>
      <h2 className="font-semibold sm:text-2xl text-xl">
        No active sessions yet
      </h2>
      <p className="sm:w-1/2 text-muted-foreground sm:text-sm text-xs">
        It looks like you haven't scheduled any tutoring sessions for this
        semester. Browse our list of available expert tutors to get started.
      </p>
      <Link
        href={'/tutors'}
        className={cn(
          buttonVariants({ variant: 'default' }),
          'rounded-full h-auto sm:py-3 py-2 px-10 mt-3 sm:text-sm text-xs',
        )}
      >
        Book a Tutor
      </Link>
    </div>
  );
};

export default EmptyBookSessionState;
