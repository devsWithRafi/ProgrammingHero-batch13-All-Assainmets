import React from 'react';
import SectionTitle from '../components/SectionTitle';
import GradientButton from '../components/GradientButton';

const ReadyToTransformSection = () => {
    return (
        <section className="w-full px-5 py-30 mt-5 text-white bg-gradient flex flex-col items-center justify-center gap-5">
            <SectionTitle>Ready to Transform Your Workflow?</SectionTitle>
            <p className="sm:text-lg text-sm text-gray-300 text-center">
                Join thousands of professionals who are already using Digitools
                to work smarter. Start your free trial today.
            </p>

            <div className="flex items-center gap-3 mt-5">
                <GradientButton type="outline">Explore Products</GradientButton>
                <button className="font-medium btn btn-outline rounded-full h-auto px-7 py-3 sm:text-[16px] text-sm">
                    View Pricing
                </button>
            </div>

            <ul className='text-gray-300 text-lg flex sm:flex-row flex-col items-center gap-5 mt-5'>
                <li className='sm:list-none list-disc list-inside'>14-day free trial</li>
                <li className='list-disc list-inside'>No credit card required</li>
                <li className='list-disc list-inside'>Cancel anytime</li>
            </ul>
        </section>
    );
};

export default ReadyToTransformSection;
