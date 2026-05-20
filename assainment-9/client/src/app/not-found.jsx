import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';

const NotFoundPage = () => {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center font-poppins">
      <h1 className="font-bold sm:text-9xl text-7xl font-viga">404</h1>
      <h3 className="font-semibold sm:text-3xl text-xl text-center">
        Oops! This page doesn't exist.
      </h3>
      <p className="text-muted-foreground text-center w-[90%] sm:w-1/2 mt-4 sm:text-sm text-xs">
        The content you're looking for has moved to a new location or never
        existed in the first place.
      </p>
      <Link
        href={'/'}
        className={cn(
          buttonVariants(),
          'mt-5 h-auto py-3 px-10 sm:text-sm text-xs rounded-full',
        )}
      >
        Go Back Home <IoMdArrowForward />
      </Link>
    </section>
  );
};

export default NotFoundPage;
