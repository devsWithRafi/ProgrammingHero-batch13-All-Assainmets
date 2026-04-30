import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiBookmark } from 'react-icons/fi';
import { LuHeart } from 'react-icons/lu';

const BooksCard = ({ book }) => {
  return (
    <div className="bg-white shadow-sm rounded-2xl">
      {/* top */}
      <div className="w-full p-2 flex items-center justify-between gap-5">
        <span className="text-xs font-poppins uppercase font-medium bg-black text-white px-2 py-0.5 rounded">
          {book.category}
        </span>

        <div className="flex items-center gap-1">
          <button className="rounded-full border border-zinc-200 p-1.5">
            <LuHeart />
          </button>
          <button className="rounded-full border border-zinc-200 p-1.5">
            <FiBookmark />
          </button>
        </div>
      </div>

      {/* image */}
      <div className="w-full aspect-square overflow-hidden">
        <Image
          src={book.image_url}
          width={1000}
          height={1000}
          alt={book.title}
          priority={false}
          className="w-full h-full object-cover select-none"
        />
      </div>

      {/* details */}
      <div className="text-center w-full flex flex-col gap-1 pb-3 px-3">
        <h3 className="text-lg font-medium font-viga w-[95%] overflow-hidden text-ellipsis text-nowrap">
          {book.title}
        </h3>
        <p className="text-sm text-zinc-400 font-normal font-poppins">
          {book.author}
        </p>
        <Link
          href={'/'}
          className="border border-gray-200 rounded-full font-poppins text-sm w-full py-1.5 mt-2"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BooksCard;
