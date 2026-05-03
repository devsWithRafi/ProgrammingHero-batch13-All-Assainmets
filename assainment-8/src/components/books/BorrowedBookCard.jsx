'use client';

import { formateDate } from '@/lib/formateDate';
import Image from 'next/image';

const BorrowedBookCard = ({ book, removeBorrowedBook }) => {
  return (
    <div className="group relative px-4 flex items-start gap-2 group bg-white shadow-sm rounded-md overflow-hidden">
      <span className="uppercase bg-black text-white text-xs absolute top-1.5 left-1.5 px-2 py-0.5 z-1">
        {book.category}
      </span>
      <div className="min-w-[35%] max-w-[35%] aspect-[2/3] overflow-hidden">
        <Image
          src={book.image_url}
          alt={book.title}
          width={500}
          height={500}
          className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-102 duration-300"
        />
      </div>
      <div className="h-full py-4 flex flex-col items-start justify-between gap-2">
        <span className="flex flex-col">
          <p className="text-xs">
            Borrowed:{' '}
            <span className="text-zinc-500">
              {formateDate(new Date(book.borrowedAt))}
            </span>
          </p>
          <span>
            <h2 className="font-viga font-medium text-lg">{book.title}</h2>
            <p className="font-abel font-bold text-sm text-zinc-500">
              {book.author}
            </p>
            <p className="text-zinc-500 text-xs mt-2">
              {book.description.slice(0, 50)}...
            </p>
          </span>
        </span>

        <button
          onClick={() => removeBorrowedBook(book.id)}
          className="border rounded-full hover:bg-black hover:text-white duration-300 w-full p-1.5 text-center text-xs text-gray-500"
        >
          Return
        </button>
      </div>
    </div>
  );
};

export default BorrowedBookCard;
