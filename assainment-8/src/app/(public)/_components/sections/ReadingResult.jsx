import SectionTitle from '@/components/SectionTitle';
import BlogList from '../BlogList';
import BlogNav from '@/components/blog/BlogNav';

const ReadingResult = () => {
  return (
    <section className="w-full p-3 h-screen">
      <div className="w-full max-w-[1500px] mx-auto">
        <SectionTitle title="Maximize Your Reading Result" />
        <BlogList />
      </div>
    </section>
  );
};

export default ReadingResult;
