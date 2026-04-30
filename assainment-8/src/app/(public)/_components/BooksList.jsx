import BooksCard from '@/components/books/BooksCard';
import { fetchBooks } from '@/services/apis/fetchBooks';

const BooksList = async () => {
  const books = await fetchBooks();

  return (
    <div className="w-full grid grid-cols-4 gap-5 mt-10">
      {books.slice(0, 4).map((book) => (
        <BooksCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
