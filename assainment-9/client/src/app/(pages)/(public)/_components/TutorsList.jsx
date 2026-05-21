import TutorCard from '@/components/tutor/TutorCard';
import { fetchTutorsData } from '@/services/apis/fetchTutorsData';
import { FaUserGraduate } from 'react-icons/fa';
import EmptyTutorsData from './EmptyTutorsData';

const TutorsList = async ({ ifNoDataMessage, query }) => {
  const tutorsData = await fetchTutorsData({ query });

  return tutorsData.length > 0 ? (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-10">
      {Array.isArray(tutorsData) &&
        tutorsData.map((tutor, index) => (
          <TutorCard key={tutor._id} index={index} tutor={tutor} />
        ))}
    </div>
  ) : (
    <EmptyTutorsData emptyMessage={ifNoDataMessage} />
  );
};

export default TutorsList;
