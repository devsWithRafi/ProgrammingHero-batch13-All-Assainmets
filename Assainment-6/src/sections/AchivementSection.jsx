import { formateNumber } from '../lib/formateNumber';

const data = {
    active_users: 50000,
    premium_tools: 200,
    rating: 4.9,
};

const AchivementSection = () => {
    return (
        <section className="w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
            <div className="max-w-[1500px] mx-auto flex md:h-[250px] h-[150px] max-[450px]:h-25 gap-3 items-center justify-between">
                {Object.entries(data).map(([key, value], index) => (
                    <>
                        <div
                            key={key}
                            className="capitalize text-white flex flex-col items-center justify-center w-full gap-2 max-[450px]:gap-1"
                        >
                            <h2 className="font-bold lg:text-7xl md:text-6xl sm:text-5xl text-4xl max-[450px]:text-2xl text-center">
                                {formateNumber(value)}+
                            </h2>
                            <p className="md:text-2xl sm:text-xl text-lg text-gray-200 text-center max-[450px]:text-sm">
                                {key.toLowerCase().replaceAll('_', ' ')}
                            </p>
                        </div>

                        {Object.keys(data).length - 1 !== index && (
                            <span className="w-0.5 bg-gray-400 h-[50%]" />
                        )}
                    </>
                ))}
            </div>
        </section>
    );
};

export default AchivementSection;
