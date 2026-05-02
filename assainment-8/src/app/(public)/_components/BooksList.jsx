'use client';

import BooksCard from '@/components/books/BooksCard';
import BooksCardSkeleton from '@/components/books/BooksCardSkeleton';
import { fetchBooks } from '@/services/apis/fetchBooks';
import { useEffect, useState } from 'react';

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [booksLoading, setBooksLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setBooksLoading(true);
        const books = await fetchBooks(true);
        setBooks(books);
        setBooksLoading(false);
      } catch (error) {
        setBooksLoading(false);
        console.error('Error fetching data:', error);
      } finally {
        setBooksLoading(false);
      }
    };
    loadData();
  }, []);

  return booksLoading ? (
    <BooksCardSkeleton />
  ) : (
    <div className="w-full grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 max-[460px]:gap-1.5">
      {books.slice(0, 4).map((book) => (
        <BooksCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
