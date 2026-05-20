import BookSessionTable from './_components/BookSessionTable';

export const metadata = {
  title: 'MediQueue | My Sessions',
};

const MySessionPage = () => {
  return (
    <section className="w-full max-w-[1500px] mx-auto px-3 py-5">
      <BookSessionTable />
    </section>
  );
};

export default MySessionPage;
