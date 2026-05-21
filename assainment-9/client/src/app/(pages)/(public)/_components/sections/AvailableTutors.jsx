import SectionTitle from '@/components/SectionTitle';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';
import { Suspense } from 'react';
import TutorsList from '../TutorsList';
import DataLoader from '@/components/DataLoader';

const noDataMessage =
  ' There are currently no tutors available at the moment. Please check back later for new tutor listings and sessions.';

const AvailableTutors = async () => {
  const query = { query: { show: 6 } };

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

      <Suspense fallback={<DataLoader className={'mt-10'} />}>
        <TutorsList query={query} ifNoDataMessage={noDataMessage} />
      </Suspense>
    </section>
  );
};

export default AvailableTutors;
