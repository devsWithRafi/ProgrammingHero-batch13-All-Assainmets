import ButtonBlack from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import { Suspense } from 'react';
import BooksList from '../BooksList';
import BooksCardSkeleton from '@/components/books/BooksCardSkeleton';
import Link from 'next/link';

const Featured = () => {
  return (
    <section className="w-full p-3 py-20">
      <div className="w-full mx-auto max-w-[1500px] flex flex-col gap-10">
        <SectionTitle
          title="Featured Books"
          description="Hand-picked by our lead archivists for your consideration."
          eliment={
            <Link href="/books" className="btn-black px-7 py-2">
              Join Now
            </Link>
          }
        />

        <BooksList />

        <Link
          href="/books"
          className="mx-auto btn-outline !px-10 !py-2 text-sm"
        >
          Browse All
        </Link>
      </div>
    </section>
  );
};

export default Featured;
