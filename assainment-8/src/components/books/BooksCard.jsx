import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiBookmark } from 'react-icons/fi';
import { LuHeart } from 'react-icons/lu';

const BooksCard = ({ book }) => {
  return (
    <div className="bg-white group shadow-sm rounded-2xl relative overflow-hidden">
      {/* top */}
      <div className="w-full z-1 absolute p-2 flex items-start justify-between gap-5">
        <span className="text-xs max-[460px]:text-[10px] font-poppins uppercase font-medium bg-black text-white px-2 py-0.5 rounded">
          {book.category}
        </span>

        <div className="flex max-[460px]:flex-col max-[460px]:gap-0.5 items-center gap-1">
          <button className="max-[460px]:scale-[0.9] rounded-full bg-white/5 backdrop-blur-xl border border-zinc-200 p-1.5">
            <LuHeart />
          </button>
          <button className="max-[460px]:scale-[0.9] rounded-full bg-white/5 backdrop-blur-xl border border-zinc-200 p-1.5">
            <FiBookmark />
          </button>
        </div>
      </div>

      {/* image */}
      <div className="w-full aspect-square overflow-hidden">
        <Image
          src={book.image_url}
          width={500}
          height={500}
          alt={book.title}
          priority={false}
          className="w-full h-full object-cover select-none max-[460px]:scale-[0.9] group-hover:scale-102 transition-all duration-300 ease-in-out"
        />
      </div>

      {/* details */}
      <div className="text-center w-full flex flex-col gap-1 pb-3 px-3 max-[460px]:gap-0 max-[460px]:-mt-3">
        <h3 className="text-lg max-[460px]:text-sm font-medium font-viga w-[95%] overflow-hidden text-ellipsis text-nowrap">
          {book.title}
        </h3>
        <p className="text-sm max-[460px]:text-xs text-zinc-400 font-normal font-poppins">
          {book.author}
        </p>
        <Link
          href={`/books/${book.id}`}
          className="border border-gray-200 rounded-full font-poppins text-sm max-[460px]:text-xs w-full py-1.5 mt-2"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BooksCard;
