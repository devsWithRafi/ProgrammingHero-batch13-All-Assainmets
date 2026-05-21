import TutorCard from '@/components/tutor/TutorCard';
import { fetchTutorsData } from '@/services/apis/fetchTutorsData';
import { FaUserGraduate } from 'react-icons/fa';

const TutorsList = async ({ ifNoDataMessage, query }) => {
  const tutorsData = await fetchTutorsData({ query });

  return tutorsData.length > 0 ? (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-10">
      {Array.isArray(tutorsData) &&
        tutorsData.map((tutor) => <TutorCard key={tutor._id} tutor={tutor} />)}
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed bg-muted/10 px-6 py-12 text-center mt-10">
      <span className="p-5 bg-muted rounded-full text-muted-foreground shadow-sm">
        <FaUserGraduate size={30} />
      </span>

      <h3 className="text-xl font-semibold tracking-tight mt-2">
        No Tutors Found
      </h3>

      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {ifNoDataMessage ||
          'We couldn&apos;t find any tutors matching your selected filters. Try adjusting your search criterias.'}
      </p>
    </div>
  );
};

export default TutorsList;
