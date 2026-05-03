'use client';

import ButtonBlack from '@/components/Button';
import { BorrowBooksContext } from '@/context/borrowBooksContext/borrowBooks.context';
import { cn } from '@/lib/utils';
import { toast } from '@heroui/react';
import { useContext } from 'react';
import { FaRegHeart } from 'react-icons/fa';

const BorrowButton = ({ isAvailable, book }) => {
  const { books, setBorrowedBooks, setFavoriteBooks } =
    useContext(BorrowBooksContext);
  const isBorrowed = books.borrowed.some((b) => b.id === book.id);
  const isFovorite = books.favorites.some((b) => b.id === book.id);

  const handleBorrowBook = () => {
    if (isBorrowed) {
      toast.danger('Book already borrowed!', {
        description: `${book.title} - is already borrowed! Please return it first or try another book!`,
      });
      return;
    }
    setBorrowedBooks(book);
    toast.success('Book borrowed successful!', {
      description: `${book.title} - is successfully borrowed!`,
    });
  };

  const handleFavoriteBook = () => {
    if (isFovorite) {
      toast.warning('Book already exists', {
        description: `${book.title} - already exists on your favorites collection!`,
      });
      return;
    }
    setFavoriteBooks(book);
    toast.success('Book added on your favorites collection!', {
      description: `${book.title} - successfully added on your favorites collection!`,
    });
  };

  return (
    <div className="mt-2 w-full flex items-center gap-3 justify-between">
      <ButtonBlack
        onClick={handleBorrowBook}
        className={cn(
          'rounded-xl w-full hover:scale-100',
          !isAvailable && 'opacity-50 pointer-events-none',
          isBorrowed && 'opacity-50 pointer-events-none',
        )}
      >
        {isBorrowed ? 'Borrowed' : 'Borrow This Book'}
      </ButtonBlack>
      <button
        onClick={handleFavoriteBook}
        className={cn(
          'p-3 bg-white hover:bg-black hover:text-white duration-300 shadow-sm rounded-full text-zinc-500',
          isFovorite && 'text-pink-400 bg-black',
        )}
      >
        <FaRegHeart size={18} />
      </button>
    </div>
  );
};

export default BorrowButton;
