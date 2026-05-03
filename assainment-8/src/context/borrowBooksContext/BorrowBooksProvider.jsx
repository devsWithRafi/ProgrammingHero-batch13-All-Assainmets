'use client';

import { useEffect, useState } from 'react';
import { BorrowBooksContext } from './borrowBooks.context';
import { toast } from '@heroui/react';

const BorrowBooksProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState({
    borrowed: [],
    favorites: [],
  });

  const setBorrowedBooks = (book) => {
    const date = new Date();
    const isBorrowed = books.borrowed.some((b) => b.id === book.id);
    if (isBorrowed) return;
    const updatedBooks = {
      ...books,
      borrowed: [...books.borrowed, { ...book, borrowedAt: date }],
    };
    setBooks(updatedBooks);
    localStorage.setItem('borrowedBooks', JSON.stringify(updatedBooks));
  };

  const removeBorrowedBook = (bookId) => {
    const updatedBooks = {
      ...books,
      borrowed: books.borrowed.filter((b) => b.id !== bookId),
    };
    toast.success('Book removed from Borrowed successfully!');
    setBooks(updatedBooks);
    localStorage.setItem('borrowedBooks', JSON.stringify(updatedBooks));
  };

  const setFavoriteBooks = (book) => {
    const updatedBooks = { ...books, favorites: [...books.favorites, book] };
    setBooks(updatedBooks);
    localStorage.setItem('favoriteBooks', JSON.stringify(updatedBooks));
  };

  const removeFavoriteBook = (bookId) => {
    const updatedBooks = {
      ...books,
      favorites: books.favorites.filter((b) => b.id !== bookId),
    };
    toast.success('Book removed from favorites successfully!');
    setBooks(updatedBooks);
    localStorage.setItem('favoriteBooks', JSON.stringify(updatedBooks));
  };

  useEffect(() => {
    const loadBooks = async () => {
      try {
        setLoading(true);
        const borrowedBooks = localStorage.getItem('borrowedBooks');
        const favoriteBooks = localStorage.getItem('favoriteBooks');

        if (borrowedBooks) {
          setBooks(JSON.parse(borrowedBooks));
        }
        if (favoriteBooks) {
          setBooks(JSON.parse(favoriteBooks));
        }
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (error) {
        setLoading(false);
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  return (
    <BorrowBooksContext.Provider
      value={{
        setBorrowedBooks,
        setFavoriteBooks,
        removeBorrowedBook,
        removeFavoriteBook,
        books,
        loading,
      }}
    >
      {children}
    </BorrowBooksContext.Provider>
  );
};

export default BorrowBooksProvider;
