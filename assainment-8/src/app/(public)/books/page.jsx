import { Suspense } from 'react';
import SideBer from './_components/SideBer';
import BooksCardSkeleton from '@/components/books/BooksCardSkeleton';
import AllBooksCards from './_components/AllBooksCards';
import BookSearchber from './_components/BookSearchber';

export const dynamic = 'force-dynamic';

const AllBooksPage = async ({ searchParams }) => {
  return (
    <section className="w-full p-3">
      <div className="w-full mt-20 max-w-[1500px] mx-auto flex flex-col gap-10">
        <h1 className="text-4xl text-center font-bold font-ring">
          Explore the library
        </h1>

        <Suspense fallback={<p>Loading...</p>}>
          <BookSearchber />
        </Suspense>

        <div className="flex gap-5 justify-between">
          <SideBer />

          <div className="w-full">
            <Suspense
              fallback={
                <BooksCardSkeleton className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3" />
              }
            >
              <AllBooksCards searchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllBooksPage;
