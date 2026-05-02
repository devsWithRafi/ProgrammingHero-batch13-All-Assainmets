import BooksCard from '@/components/books/BooksCard';
import { fetchBooks } from '@/services/apis/fetchBooks';
import { GiBookshelf } from 'react-icons/gi';

const AllBooksCards = async ({ searchParams }) => {
  const books = await fetchBooks();
  const { category, title } = await searchParams;

  const filtered = books.filter((book) => {
    if (category && book.category.toLowerCase() !== category) return false;
    if (title && !book.title.toLowerCase().includes(title)) return false;
    return true;
  });

  return (
    <>
      {filtered.length > 0 ? (
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 max-[460px]:gap-1.5">
          {filtered.map((book) => (
            <BooksCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <GiBookshelf className="text-6xl text-zinc-500" />
          <h2 className="font-poppins font-medium text-zinc-600 mt-2 text-sm capitalize">
            No books match your filters
          </h2>
        </div>
      )}
    </>
  );
};

export default AllBooksCards;
