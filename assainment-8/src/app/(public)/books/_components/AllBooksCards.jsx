import BooksCard from '@/components/books/BooksCard';
import { fetchBooks } from '@/services/apis/fetchBooks';

const AllBooksCards = async ({ searchParams }) => {
  const books = await fetchBooks();
  const { category, title } = await searchParams;

  const filtered = books.filter((book) => {
    if (category && book.category.toLowerCase() !== category) return false;
    if (title && !book.title.toLowerCase().includes(title)) return false;
    return true;
  });

  return (
    <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 max-[460px]:gap-1.5">
      {filtered.map((book) => (
        <BooksCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default AllBooksCards;
