import BooksCard from '@/components/books/BooksCard';
import BooksCardSkeleton from '@/components/books/BooksCardSkeleton';
import { fetchBooks } from '@/services/apis/fetchBooks';

const BooksList = async () => {
  const books = await fetchBooks();

  return (
    <div className="w-full grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 max-[460px]:gap-1.5">
      {books.slice(0, 4).map((book) => (
        <BooksCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
