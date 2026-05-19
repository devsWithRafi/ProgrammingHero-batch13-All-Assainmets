import SectionTitle from '@/components/SectionTitle';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';
import { fetchTutorsData } from '@/services/apis/fetchTutorsData';
import { Suspense } from 'react';
import TutorsList from '../TutorsList';

const AvailableTutors = async () => {
  const tutors = await fetchTutorsData();

  return (
    <section className="py-15 w-full max-w-[1500px] mx-auto px-3 min-h-screen">
      <SectionTitle
        title="Learn From The Best"
        description="Top-rated tutors available right now in Dhaka"
        eliment={
          <Link
            href="/tutors"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View All Tutors
            <IoMdArrowForward />
          </Link>
        }
      />

      <Suspense fallback={<p>Loading...</p>}>
        <TutorsList tutorsData={tutors} />
      </Suspense>
    </section>
  );
};

export default AvailableTutors;
