import TimelineFilterBer from './_components/TimelineFilterBer';
import TimelineHistorySection from './_components/TimelineHistorySection';

export const metadata = {
  title: 'KeenKeeper | Timeline',
};

const TimelinePage = () => {
  return (
    <section className="md:max-w-[1000px] mx-auto sm:mt-15 mt-10 py-15 min-h-screen flex flex-col gap-5">
      <h2 className="sm:text-5xl text-3xl font-bold">Timeline</h2>

      <TimelineFilterBer />

      <div className="w-full flex flex-col gap-2">
        <TimelineHistorySection />
      </div>
    </section>
  );
};

export default TimelinePage;
