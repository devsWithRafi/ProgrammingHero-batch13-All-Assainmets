import MyTutorsTable from './_components/MyTutorsTable';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'MediQueue | My Tutors',
};

const MyTutorsPage = () => {
  return (
    <section className="w-full px-3 py-7 max-w-[1500px] mx-auto min-h-screen mt-15">
      <MyTutorsTable />
    </section>
  );
};

export default MyTutorsPage;
