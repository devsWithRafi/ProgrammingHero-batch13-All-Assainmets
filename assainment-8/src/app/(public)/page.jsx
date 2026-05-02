import Elivate from './_components/sections/Elivate';
import Featured from './_components/sections/Featured';
import Hero from './_components/sections/Hero';
import ReadingResult from './_components/sections/ReadingResult';

export default function HomePage() {
  return (
    <section className="w-full min-h-screen">
      <Hero />
      <Featured />
      <ReadingResult />
      <Elivate />
    </section>
  );
}
