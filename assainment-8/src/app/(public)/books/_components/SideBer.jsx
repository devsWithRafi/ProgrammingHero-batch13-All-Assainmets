import { fetchBooks } from '@/services/apis/fetchBooks';
import Category from './Category';
import { Suspense } from 'react';
import { Button, Separator } from '@heroui/react';

const SideBer = async () => {
  const books = await fetchBooks();
  const categories = [
    ...new Set(books.map((book) => book.category.toLowerCase())),
  ];

  return (
    <aside className="bg-white sm:flex sticky top-18 flex-col justify-between p-5 min-w-70 max-w-70 max-h-[500px] rounded-2xl shadow-sm hidden">
      <div className="flex flex-col gap-3">
        <h3 className="uppercase font-poppins font-medium text-zinc-400">
          Categories
        </h3>
        <Suspense fallback={<p>Loading...</p>}>
          <Category categories={categories} />
        </Suspense>
      </div>

      <Separator className="my-3 bg-gray-100" />

      <div className="bg-black p-5 rounded-md mt-5">
        <h2 className="text-white font-medium text-lg font-poppins">
          Curated for You
        </h2>
        <p className="text-xs font-poppins text-zinc-400 mt-3">
          Based on your recent interest in Quantum Physics.
        </p>
        <Button variant="tertiary" className="rounded w-full mt-5">
          View List
        </Button>
      </div>
    </aside>
  );
};

export default SideBer;
