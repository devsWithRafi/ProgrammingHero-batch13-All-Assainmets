import { fixedSampleData } from '@/lib/fixedSampleData';
import React from 'react';

const ExploreAllLearning = () => {
  return (
    <section className="w-full py-20">
      <div className="w-full max-w-[1500px] mx-auto p-5 flex flex-col items-center justify-center">
        <h2 className="sm:text-4xl text-2xl font-ring text-center font-bold">
          Explore All Learning Areas
        </h2>
        <p className="text-muted-foreground font-medium text-sm text-center mt-5 sm:w-1/2 w-full">
          Unlock endless opportunities to learn, practice, and succeed through
          carefully designed tutoring sessions that make education accessible,
          flexible, and rewarding for everyone.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
          {fixedSampleData.subjects.map((subject, index) => (
            <div
              key={index}
              className="sm:px-6 px-5 sm:py-3 py-2 h-auto border rounded-full text-muted-foreground font-medium sm:text-sm text-xs"
            >
              {subject}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreAllLearning;
