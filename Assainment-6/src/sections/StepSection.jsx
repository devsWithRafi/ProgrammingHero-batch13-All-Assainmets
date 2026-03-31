import { StepSectionData } from '../../public/data/StepSectionData';
import SectionTitle from '../components/SectionTitle';

const StepSection = () => {
    return (
        <section className="w-full py-30 bg-[#F9FAFC] p-5 mt-[6%]">
            <div className="max-w-[1500px] mx-auto">
                <SectionTitle>Step By Step Guide</SectionTitle>
                <p className="sm:text-[16px] text-sm text-gray-500 text-center mt-5">
                    Start using premium digital tools in minutes, not hours.
                </p>
                {/* cards */}
                <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 gap-5 mt-10">
                    {StepSectionData.map((step, index) => (
                        <div
                            key={index}
                            className="card relative bg-white shadow-sm rounded-2xl flex flex-col gap-5 items-center px-5 py-15"
                        >
                            <span className="text-white absolute top-5 text-lg right-5 bg-gradient size-10 flex items-center justify-center rounded-full">
                                {index + 1 > 9 ? index + 1 : `0${index + 1}`}
                            </span>
                            <div className="bg-[#f1e9fe] rounded-full p-5">
                                <img
                                    src={step.icon}
                                    alt="icon"
                                    className="w-11.25"
                                />
                            </div>

                            <h2 className="text-3xl font-semibold text-center">
                                {step.title}
                            </h2>
                            <p className="text-center text-gray-500 w-[90%]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StepSection;
