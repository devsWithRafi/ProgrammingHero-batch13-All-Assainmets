'use client';

import BooksCard from '@/components/books/BooksCard';
import BooksCardSkeleton from '@/components/books/BooksCardSkeleton';
import { BorrowBooksContext } from '@/context/borrowBooksContext/borrowBooks.context';
import { Separator } from '@heroui/react';
import { useContext } from 'react';
import { GiBookshelf } from 'react-icons/gi';
import BorrowedBookCard from '@/components/books/BorrowedBookCard';
import BorrowedCardSkeleton from '@/components/books/BorrowedCardSkeleton';
import { RxCross2 } from 'react-icons/rx';

const ProfileContent = () => {
  const { books, loading, removeBorrowedBook, removeFavoriteBook } = useContext(BorrowBooksContext);
  const borrowedBooks = books.borrowed;
  const favoriteBooks = books.favorites;

  return (
    <div className="w-full max-w-[1300px] mx-auto">
      {/* Borrowed books */}
      <h2 className="font-bold font-ring text-3xl mt-10">Borrowed Books</h2>
      <Separator className="my-4" />
      {loading ? (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
          <BorrowedCardSkeleton amount={3} />
        </div>
      ) : borrowedBooks.length > 0 ? (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
          {borrowedBooks.map((book) => (
            <BorrowedBookCard
              key={book.id}
              book={book}
              removeBorrowedBook={removeBorrowedBook}
            />
          ))}
        </div>
      ) : (
        <div className="w-full h-80 flex flex-col items-center justify-center">
          <GiBookshelf className="text-6xl text-zinc-500" />
          <h2 className="font-poppins font-medium text-zinc-600 mt-2 text-sm capitalize">
            No books borrowed
          </h2>
        </div>
      )}

      {/* Favorites books */}
      <h2 className="font-bold font-ring text-3xl mt-10">My Favorites</h2>
      <Separator className="my-4" />
      {loading ? (
        <BooksCardSkeleton
          amount={4}
          className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3"
        />
      ) : favoriteBooks.length > 0 ? (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
          {favoriteBooks.map((book) => (
            <div key={book.id} className="relative group">
              <BooksCard book={book} />
              <button onClick={() => removeFavoriteBook(book.id)} 
                className="text-white z-1 bg-red-500 hover:bg-red-600 opacity-0 group-hover:opacity-100 hover:scale-105 duration-200 shadow-sm cursor-pointer rounded-full p-1 absolute -top-2 -right-2">
                <RxCross2 />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-100 flex flex-col items-center justify-center">
          <GiBookshelf className="text-6xl text-zinc-500" />
          <h2 className="font-poppins font-medium text-zinc-600 mt-2 text-sm capitalize">
            No favorite books
          </h2>
        </div>
      )}
    </div>
  );
};

export default ProfileContent;
