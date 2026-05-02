import { assets } from '@/assets/assets';
import ButtonBlack from '@/components/Button';
import { Separator } from '@heroui/react';
import Link from 'next/link';

const achievements = [
  { title: '500+', subtitle: 'Curated Titles' },
  { title: '12K+', subtitle: 'Intentional Readers' },
  { title: '4.9/5', subtitle: 'Impact Rating' },
  { title: '1M+', subtitle: 'Engaged Followers' },
];

const Elivate = () => {
  return (
    <section
      className="w-full min-h-screen sm:mt-10 bg-center bg-cover sm:py-20 bg-no-repeat"
      style={{ backgroundImage: `url(${assets.footerBenner.src})` }}
    >
      <div className="w-full max-w-[1500px] mx-auto p-3 flex flex-col items-center gap-5">
        <h2 className="sm:text-6xl text-4xl font-ring text-center">
          Elevate Your Library. <br /> Expand Your Mind
        </h2>
        <p className="sm:text-md text-sm font-poppins text-zinc-500 text-center sm:w-2/3 w-[90%] mx-auto">
          Stop scrolling and start discovering. Explore our collection of
          essential summaries and deep-dives designed for the intentional
          reader.
        </p>
        <Link href="/books" className='btn-black'>
          Explore Collection
        </Link>

        <div className="flex items-center justify-center sm:gap-10 gap-4 flex-wrap mt-10">
          {achievements.map((item, index) => (
            <span key={index} className="flex items-center sm:gap-10 gap-4">
              <span className="flex flex-col text-center items-center gap-2">
                <h4 className="font-abel font-bold sm:text-4xl text-2xl">{item.title}</h4>
                <p className="sm:text-sm text-xs text-zinc-500 font-poppins">
                  {item.subtitle}
                </p>
              </span>
              {achievements.length - 1 !== index && (
                <Separator orientation="vertical" />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Elivate;
