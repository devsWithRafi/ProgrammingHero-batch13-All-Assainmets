import BookSessionTable from './_components/BookSessionTable';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'MediQueue | My Sessions',
};

const MySessionPage = () => {
  return (
    <section className="w-full max-w-[1500px] mx-auto px-3 py-7 min-h-screen mt-15">
      <BookSessionTable />
    </section>
  );
};

export default MySessionPage;
