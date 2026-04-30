import Featured from './_components/sections/Featured';
import Hero from './_components/sections/Hero';

export default function HomePage() {
  return (
    <section className="w-full min-h-screen">
      <Hero />
      <Featured />
    </section>
  );
}
