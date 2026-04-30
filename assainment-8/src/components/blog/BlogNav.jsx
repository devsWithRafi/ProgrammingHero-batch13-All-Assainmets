'use client';

import ButtonBlack from '../Button';
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md';

const BlogNav = ({ swiperRef }) => {
  return (
    <div className="flex sm:flex-row flex-col sm:items-center gap-5 justify-between">
      <p className="text-zinc-500 font-poppins sm:text-md text-sm font-medium sm:w-1/2 mt-3 w-[80%]">
        Master tips and tricks for Intentional Reading from experts. Get book
        summaries and discover strategies to turn knowladge into action.
      </p>

      <div className="sm:w-auto w-full flex items-center gap-3">
        <ButtonBlack
          onClick={() => swiperRef?.slidePrev()}
          className="py-4 px-7 sm:w-auto w-full hover:bg-white hover:text-black hover:border-gray-200"
        >
          <MdOutlineArrowBackIosNew />
        </ButtonBlack>
        <ButtonBlack
          onClick={() => swiperRef?.slideNext()}
          className="py-4 px-7 sm:w-auto w-full hover:bg-white hover:text-black hover:border-gray-200"
        >
          <MdArrowForwardIos />
        </ButtonBlack>
      </div>
    </div>
  );
};

export default BlogNav;
