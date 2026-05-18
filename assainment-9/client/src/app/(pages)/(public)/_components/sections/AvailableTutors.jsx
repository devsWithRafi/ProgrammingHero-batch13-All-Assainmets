import SectionTitle from '@/components/SectionTitle';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';
import tutorsData from '@/lib/dummy-data/tutors.json';

import TutorCard from '@/components/tutor/TutorCard';

const AvailableTutors = () => {
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

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-10">
        {tutorsData.map((tutor) => (
          <TutorCard key={tutor.id} tutor={tutor} />
        ))}
      </div>
    </section>
  );
};

export default AvailableTutors;
