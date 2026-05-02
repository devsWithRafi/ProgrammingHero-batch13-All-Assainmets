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
            <Link href="/books">
              <ButtonBlack className={'px-7 py-4.5'}>Join Now</ButtonBlack>
            </Link>
          }
        />

        <Suspense fallback={<BooksCardSkeleton />}>
          <BooksList />
        </Suspense>

        <Link href="/books" className='mx-auto'>
          <ButtonBlack className={'px-10 py-4.5'} buttonType='outline'>Browse All</ButtonBlack>
        </Link>
      </div>
    </section>
  );
};

export default Featured;
