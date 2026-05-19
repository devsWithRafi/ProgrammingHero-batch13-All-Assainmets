import TutorCard from '@/components/tutor/TutorCard';
import React from 'react';

const TutorsList = ({ tutorsData }) => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-10">
      {tutorsData.map((tutor) => (
        <TutorCard key={tutor.id} tutor={tutor} />
      ))}
    </div>
  );
};

export default TutorsList;
