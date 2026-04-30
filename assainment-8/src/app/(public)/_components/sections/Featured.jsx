import ButtonBlack from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import { Suspense } from 'react';
import BooksList from '../BooksList';

const Featured = async () => {
  return (
    <section className="w-full p-5 min-h-screen py-20">
      <div className="w-full mx-auto max-w-[1500px]">
        <SectionTitle
          title="Featured Books"
          description="Hand-picked by our lead archivists for your consideration."
          eliment={
            <ButtonBlack className={'px-7 py-4.5'}>Join Now</ButtonBlack>
          }
        />

        <Suspense fallback={<div>Loading...</div>}>
          <BooksList />
        </Suspense>
      </div>
    </section>
  );
};

export default Featured;
