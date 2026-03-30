import { use } from 'react';
import SectionTitle from '../components/SectionTitle';
import SubscriptionCard from '../components/SubscriptionCard';

const PricingSection = ({ pricingDataPromise }) => {
    const pricingData = use(pricingDataPromise);

    return (
        <section className="min-h-screen w-full p-5 mt-15">
            <div className="w-full max-w-[1500px] mx-auto">
                <SectionTitle>Simple, Transparent Pricing</SectionTitle>
                <p className="sm:text-[16px] text-sm text-gray-500 text-center mt-5">
                    Choose the plan that fits your needs. Upgrade or downgrade
                    anytime.
                </p>

                {/* pricing cards */}
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-5 gap-10 mt-15'>
                    {pricingData.map((item) => (
                        <SubscriptionCard key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;

