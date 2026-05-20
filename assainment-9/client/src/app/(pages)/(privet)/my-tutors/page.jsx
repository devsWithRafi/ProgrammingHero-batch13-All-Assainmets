import MyTutorsTable from './_components/MyTutorsTable';

export const metadata = {
  title: 'MediQueue | My Tutors',
};

const MyTutorsPage = () => {
  return (
    <section className="w-full p-3 max-w-[1500px] mx-auto">
      <MyTutorsTable />
    </section>
  );
};

export default MyTutorsPage;
