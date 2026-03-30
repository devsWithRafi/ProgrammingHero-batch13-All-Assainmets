import { assets } from '../assets/assets';
import GradientButton from '../components/GradientButton';
import GradientText from '../components/GradientText';

const HeroSection = () => {
    return (
        <section className="min-h-screen md:mt-0 mt-[20%] max-w-[1500px] flex md:flex-row flex-col md:gap-5 gap-15 items-center justify-between w-full mx-auto">
            {/* SECTION LEFT */}
            <div className="flex flex-col md:items-start items-center gap-3">
                <div className="flex items-center gap-1 bg-[#E1E7FF] rounded-full p-2 px-3">
                    <img
                        src={assets.heroPointIcon}
                        alt="heroPointIcon"
                        className="sm:w-4 w-3"
                    />
                    <GradientText size={'sm:text-sm text-xs'}>
                        New: AI-Powered Tools Available
                    </GradientText>
                </div>

                <h1 className="lg:text-[72px] sm:text-[50px] text-4xl md:text-left text-center font-bold lg:leading-20 sm:leading-15">
                    Supercharge Your <br /> Digital Workflow
                </h1>
                <p className="text-gray-500 sm:text-lg text-sm w-[90%] py-5 md:text-left text-center">
                    Access premium AI tools, design assets, templates, and
                    productivity software—all in one place. Start creating
                    faster today. Explore Products
                </p>

                <div className="flex items-center sm:gap-5 gap-2">
                    <GradientButton>Explore Products</GradientButton>
                    <GradientButton type="outline">
                        <img src={assets.playIcon} className="w-3.5" />
                        Watch Demo
                    </GradientButton>
                </div>
            </div>
            {/* SECTION RIGHT */}
            <div className="w-full flex items-center md:justify-end justify-center">
                <img
                    src={assets.bennerPng}
                    alt="hero benner"
                    className="object-cover shadow-md rounded-lg"
                />
            </div>
        </section>
    );
};

export default HeroSection;
