import AvailableTutors from './_components/sections/AvailableTutors';
import FooterArea from './_components/sections/FooterArea';
import Hero from './_components/sections/Hero';

export default function HomePage() {
  return (
    <section className="mt-15">
      <Hero />
      <AvailableTutors />
      <FooterArea />
    </section>
  );
}
