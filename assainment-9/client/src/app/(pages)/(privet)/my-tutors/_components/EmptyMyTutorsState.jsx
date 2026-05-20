import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { IoMdArrowForward } from "react-icons/io";
import { IoMdBook } from "react-icons/io";


const EmptyMyTutorsState = () => {
  return (
    <div className="mt-10 w-full border-2 px-5 sm:py-20 py-10 flex flex-col items-center justify-center gap-4 text-center rounded-xl border-dashed">
      <span className="p-4 rounded-full bg-muted aspect-square text-muted-foreground">
        <IoMdBook className='size-8'/>
      </span>
      <h2 className="font-semibold sm:text-2xl text-xl">
        You haven't added any tutors yet
      </h2>
      <p className="sm:w-1/2 text-muted-foreground sm:text-sm text-xs">
        Get started by adding your first tutor to the platform.
      </p>
      <Link
        href={'/add-tutor'}
        className={cn(
          buttonVariants({ variant: 'default' }),
          'rounded-full h-auto sm:py-3 py-2 px-10 mt-3 sm:text-sm text-xs',
        )}
      >
        Add Tutor
        <IoMdArrowForward />
      </Link>
    </div>
  );
};

export default EmptyMyTutorsState;
