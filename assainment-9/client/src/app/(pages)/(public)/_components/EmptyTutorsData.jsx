import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';

const EmptyTutorsData = ({ emptyMessage }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed bg-muted/10 px-6 py-12 text-center mt-10">
      <span className="p-5 bg-muted rounded-full text-muted-foreground shadow-sm">
        <FaUserGraduate size={30} />
      </span>

      <h3 className="text-xl font-semibold tracking-tight mt-2">
        No Tutors Found
      </h3>

      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {emptyMessage ||
          'We couldn&apos;t find any tutors matching your selected filters. Try adjusting your search criterias.'}
      </p>
    </div>
  );
};

export default EmptyTutorsData;
