import { assets } from '@/assets/assets';
import ButtonBlack from '@/components/Button';
import HeroMarquee from '@/components/HeroMarquee';

const Hero = async () => {
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
              <ButtonBlack buttonType="outline">Sign Up</ButtonBlack>
            </div>
          </div>
        </div>
      </section>

      <HeroMarquee />
    </>
  );
};

export default Hero;
