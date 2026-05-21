'use client';

import SectionTitle from '@/components/SectionTitle';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';
import DataLoader from '@/components/DataLoader';
import { fetchTutorsData } from '@/services/apis/fetchTutorsData';
import EmptyTutorsData from '../EmptyTutorsData';
import TutorCard from '@/components/tutor/TutorCard';
import { useEffect, useState, useTransition } from 'react';

const noDataMessage =
  ' There are currently no tutors available at the moment. Please check back later for new tutor listings and sessions.';

const AvailableTutors = () => {
  const [tutors, setTutors] = useState([]);
  const [tutorLoading, sartTutorLoading] = useTransition();
  const query = { query: { show: 6 } };

  useEffect(() => {
    const loadData = async () => {
      sartTutorLoading(async () => {
        const data = await fetchTutorsData(query);
        setTutors(data);
      });
    };
    loadData();
  }, []);

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

      {tutorLoading ? (
        <DataLoader className={'mt-10'} />
      ) : tutors.length > 0 ? (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-10">
          {Array.isArray(tutors) &&
            tutors.map((tutor) => <TutorCard key={tutor._id} tutor={tutor} />)}
        </div>
      ) : (
        <EmptyTutorsData emptyMessage={noDataMessage} />
      )}
    </section>
  );
};

export default AvailableTutors;
