import SectionTitle from '@/components/SectionTitle';
import { fetchTutorsData } from '@/services/apis/fetchTutorsData';
import TutorsList from '../_components/TutorsList';
import { Suspense } from 'react';
import FilterHeader from './_components/FilterHeader';

export const metadata = {
  title: 'MediQueue | Tutors',
};

const TutorPage = async ({ searchParams }) => {
  const query = await searchParams;
  const tutors = await fetchTutorsData({ query });

  return (
    <section className="w-full max-w-[1500px] mx-auto flex flex-col gap-5 px-3 py-8">
      <SectionTitle
        title="Browse Tutors"
        description="Find the right tutor to elevate your academic performance with expert guidance."
      />

      <FilterHeader />

      <Suspense fallback={<p>Loading...</p>}>
        <TutorsList tutorsData={tutors} />
      </Suspense>
    </section>
  );
};

export default TutorPage;
