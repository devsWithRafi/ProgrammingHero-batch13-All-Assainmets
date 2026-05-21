import TutorDetails from './_components/TutorDetails';

export const metadata = {
  title: 'MediQueue | Tutor Details',
};

const TutorDetailsPage = async () => {
  return (
    <section className="w-full mt-15">
      <TutorDetails />
    </section>
  );
};

export default TutorDetailsPage;
