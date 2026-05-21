import SectionTitle from '@/components/SectionTitle';
import TutorsList from '../_components/TutorsList';
import { Suspense } from 'react';
import FilterHeader from './_components/FilterHeader';
import DataLoader from '@/components/DataLoader';

export const metadata = {
  title: 'MediQueue | Tutors',
};

const TutorPage = async ({ searchParams }) => {
  const query = await searchParams;

  return (
    <section className="w-full max-w-[1500px] mx-auto flex flex-col gap-5 px-3 py-8 mt-15">
      <SectionTitle
        title="Browse Tutors"
        description="Find the right tutor to elevate your academic performance with expert guidance."
      />

      <FilterHeader />

      <Suspense fallback={<DataLoader />}>
        <TutorsList query={query} />
      </Suspense>
    </section>
  );
};

export default TutorPage;
