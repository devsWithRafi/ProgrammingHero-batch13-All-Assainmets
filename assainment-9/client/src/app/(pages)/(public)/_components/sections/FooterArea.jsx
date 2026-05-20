import { assets } from '@/assets/assets';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';

const FooterArea = () => {
  return (
    <section className="max-w-[1500px] mx-auto w-full p-3 flex flex-col items-center justify-center pb-10">
      <div className="bg-black sm:px-10 px-5 sm:py-10 py-5 lg:h-100 md:h-80 h-auto w-full rounded-2xl flex sm:flex-row sm:gap-0 gap-5 flex-col sm:items-center justify-between relative overflow-hidden">
        <div className="flex items-start flex-col gap-5 sm:w-1/2">
          <h2 className="font-medium font-ring sm:text-3xl text-xl text-white">
            Are you a student?
          </h2>
          <p className="sm:text-sm text-xs sm:w-1/2 w-full text-muted-foreground font-medium">
            Join Bangladesh's fastest growing education network. Discover
            top-notch tutors, and unlock your learning potential.
          </p>
          <Link
            href={'/tutors'}
            className={cn(
              buttonVariants(),
              'rounded-full h-auto sm:py-3 py-2 sm:px-10 px-5 !bg-white text-black sm:text-sm text-xs font-semibold',
            )}
          >
            Book a Tutor
            <IoMdArrowForward />
          </Link>
        </div>

        <div className="sm:w-1/2 h-full flex sm:items-center sm:justify-center z-1 gap-5">
          <div className="sm:py-4 py-2 sm:px-10 px-5 rounded bg-white/12 backdrop-blur-[2px] flex flex-col items-center justify-center gap-1">
            <span className="text-white sm:text-2xl text-xl font-ring font-semibold">
              20+
            </span>
            <span className="font-sm text-zinc-400 text-xs">SUBJECTS</span>
          </div>
          <div className="sm:py-4 py-2 sm:px-10 px-5 rounded bg-white/12 backdrop-blur-[2px] flex flex-col items-center justify-center gap-1">
            <span className="text-white sm:text-2xl text-xl font-ring font-semibold">
              5k+
            </span>
            <span className="font-sm text-zinc-400 text-xs">STUDENTS</span>
          </div>
        </div>

        <Image
          src={assets.circleSvg}
          width={500}
          height={500}
          alt="circle"
          className="sm:w-1/2 w-full h-full object-cover absolute right-0 select-none pointer-events-none"
        />
      </div>
    </section>
  );
};

export default FooterArea;
