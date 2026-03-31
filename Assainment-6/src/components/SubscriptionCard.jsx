import { Check } from 'lucide-react';
import GradientButton from './GradientButton';
import { cn } from '../lib/cn';

const SubscriptionCard = ({ data }) => {
    const isPopular = data.is_popular;

    return (
        <div
            className={`w-full relative card rounded-2xl p-7 shadow-sm flex flex-col items-center transition-all duration-300 hover:scale-102
                 cursor-pointer hover:shadow-2xl
                ${isPopular ? 'bg-gradient text-white' : 'bg-white'}`}
        >
            {/* badge */}
            {isPopular && (
                <span className="absolute -top-4 text-[#BB4D00] text-[17px] font-medium bg-[#FEF3C6] px-3 py-1 rounded-full">
                    Most Popular
                </span>
            )}

            {/* card details */}
            <div className="w-full h-full flex flex-col items-start justify-between">
                <div>
                    <h2 className="text-2xl font-semibold">{data.tier}</h2>
                    <p
                        className={cn(
                            'text-lg text-gray-400',
                            isPopular && 'text-gray-300',
                        )}
                    >
                        {data.description}
                    </p>

                    <h2 className="text-5xl font-bold py-5">
                        ${data.price_per_month}
                        <span
                            className={cn(
                                'text-lg font-normal text-gray-400',
                                isPopular && 'text-gray-300',
                            )}
                        >
                            /Month
                        </span>
                    </h2>

                    {/* features list */}
                    <ul className="mt-2">
                        {data.features.map((feature, index) => (
                            <li
                                key={index}
                                className={cn(
                                    'flex mt-2 items-center gap-2 text-gray-400 font-medium text-[16px]',
                                    isPopular && 'text-gray-300',
                                )}
                            >
                                <Check className="text-green-500" size={18} />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* buy now button */}
                {isPopular ? (
                    <GradientButton className="mt-10 w-full" type="outline">
                        {data.call_to_action}
                    </GradientButton>
                ) : (
                    <GradientButton className="mt-10 w-full">
                        {data.call_to_action}
                    </GradientButton>
                )}
            </div>
        </div>
    );
};

export default SubscriptionCard;
