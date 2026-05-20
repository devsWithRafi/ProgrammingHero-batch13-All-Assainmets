'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { SiWikibooks } from 'react-icons/si';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { IoMdArrowForward } from 'react-icons/io';

const dummySub = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'English Lit',
  'IELTS',
  'Computer Science',
  'Economics',
];

const bennerData = [
  {
    title: 'Find Your Perfect Tutor',
    image: assets.bennerImage3,
    description:
      'Browse expert tutors across 20+ subjects. From admission tests to advanced calculus, we bridge the gap between curiosity and mastery.',
  },
  {
    title: 'Learn Online Anytime, Anywhere',
    image: assets.bennerImage2,
    description:
      'Unleash your learning potential with our online tutoring services. Access personalized lessons, anytime, anywhere, from the comfort of your own home.',
  },
  {
    title: 'Secure Your Learning Slots',
    image: assets.bennerImage1,
    description:
      'Secure your learning slots with our secure booking system. Your safety and convenience are our top priorities, ensuring a stress-free learning experience.',
  },
];

const Hero = () => {
  const swiperRef = useRef(null);

  return (
    <section className="w-full lg:h-[calc(100vh-60px)] flex flex-col">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
        }}
        effect={'fade'}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full overflow-hidden h-auto relative"
        pagination={{ clickable: true }}
        modules={[EffectFade, Pagination, Autoplay]}
        navigation={true}
        loop={true}
      >
        {bennerData.map((item, index) => (
          <SwiperSlide key={index} className="w-full relative overflow-hidden">
            <Image
              src={item.image}
              alt="banner"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover select-none pointer-events-none"
            />
            <div className="w-full h-full top-0 left-0 absolute bg-gradient-to-r from-[#000]/90 via-[#3525CD]/60 to-[#3525CD]/0">
              <div className="flex flex-col justify-center items-start p-3 max-w-[1500px] mx-auto w-full h-full sm:gap-5">
                <h2 className="text-white md:text-7xl sm:text-5xl text-2xl font-ring sm:w-2/3">
                  {item.title}
                </h2>
                <p className="sm:text-lg text-xs text-zinc-400 sm:w-1/2">
                  {item.description}
                </p>
                <Link
                  href={'/tutors'}
                  className={cn(
                    buttonVariants({ variant: 'secondary' }),
                    'h-auto sm:p-3 p-2 px-4 sm:px-8 rounded-full font-poppins font-medium sm:mt-5 mt-3',
                  )}
                >
                  Explore Tutors
                  <IoMdArrowForward />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="text-white absolute z-1 left-5 top-[45%] cursor-pointer hover:scale-102 p-3 bg-white/20 backdrop-blur-[3px] rounded-full border border-white/10 shadow-md"
        >
          <MdOutlineArrowBackIosNew size={20} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="text-white absolute z-1 right-5 top-[45%] cursor-pointer hover:scale-102 p-3 bg-white/20 backdrop-blur-[3px] rounded-full border border-white/10 shadow-md"
        >
          <MdOutlineArrowForwardIos size={20} />
        </button>
      </Swiper>

      {/* popular subjects */}
      <div className="w-full bg-primary text-primary-foreground font-poppins py-4 overflow-hidden flex items-center px-5 gap-3">
        <p className="text-nowrap font-ring">Popular Subjects:</p>
        <Marquee pauseOnHover speed={30} className="w-full">
          {[...dummySub, ...dummySub].map((item, index) => (
            <span key={index} className="flex items-center uppercase">
              <span>{item}</span>
              <SiWikibooks className="shrink-0 sm:mx-20 mx-5" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Hero;
