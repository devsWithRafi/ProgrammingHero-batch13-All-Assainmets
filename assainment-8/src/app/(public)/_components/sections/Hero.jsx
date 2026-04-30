import { assets } from '@/assets/assets';
import ButtonBlack from '@/components/Button';
import Marquee from 'react-fast-marquee';
import { PiStarFourFill } from 'react-icons/pi';

const Hero = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${assets.heroBenner.src})` }}
        className="bg-cover bg-center w-full h-screen"
      >
        <div className="w-full max-w-[1500px] p-5 mx-auto flex items-center gap-5">
          <div className="w-full flex flex-col items-center gap-5 sm:mt-30 mt-20">
            <h1 className="font font-bold text-center lg:text-8xl md:text-7xl sm:text-6xl text-5xl text-black drop-shadow-2xl">
              <span className="text-zinc-300">Find Your</span> Next Read
            </h1>
            <p className="text-zinc-400 sm:text-sm text-xs font-poppins font-medium text-center w-[90%] sm:max-w-175">
              Access an curated collection of timeless literature and
              cutting-edge publications. Your journey through the world of
              intellect begins with a single page.
            </p>

            <div className="flex items-center gap-3">
              <ButtonBlack>Browse Now</ButtonBlack>
              <ButtonBlack type="outline">Sign Up</ButtonBlack>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-black text-zinc-300 font-poppins py-4 overflow-hidden">
        <Marquee className="w-full">
          <div className="flex items-center gap-10 whitespace-nowrap lg:text-xl sm:text-sm text-xs uppercase font-medium">
            <span>New Arrivals: The Midnight Library</span>
            <PiStarFourFill className="shrink-0" />

            <span>Special Discount on Memberships</span>
            <PiStarFourFill className="shrink-0" />

            <span>New Sci-Fi Collection Out Now!</span>
            <PiStarFourFill className="shrink-0" />
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Hero;
