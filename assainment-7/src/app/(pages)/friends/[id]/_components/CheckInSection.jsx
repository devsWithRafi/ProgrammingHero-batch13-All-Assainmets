import Image from 'next/image';
import React from 'react';
import { assets } from '@/assets/assets';
import { Button } from '@/components/ui/Button';

const CheckInSection = ({ friend }) => {
    return (
        <div className="bg-white shadow-sm rounded-sm p-5">
            <h2 className="sm:text-xl text-lg font-medium text-deepGreen">
                Quick Check-In
            </h2>

            <div className="grid lg:grid-cols-3 grid-cols-2 gap-3 mt-5">
                <Button className="bg-gray-50 flex flex-col gap-2 items-center justify-center border p-5 h-auto border-gray-100 rounded-sm">
                    <Image
                        src={assets.callPng}
                        alt=""
                        width={26}
                        height={26}
                        className="size-6.5 pointer-events-none select-none"
                    />
                    <span className="sm:text-lg text-sm font-medium text-[#1F2937]">
                        Call
                    </span>
                </Button>
                <Button className="bg-gray-50 flex flex-col gap-2 items-center justify-center border p-5 h-auto border-gray-100 rounded-sm">
                    <Image
                        src={assets.textPng}
                        alt=""
                        width={26}
                        height={26}
                        className="size-6.5 pointer-events-none select-none"
                    />
                    <span className="sm:text-lg text-sm font-medium text-[#1F2937]">
                        Text
                    </span>
                </Button>
                <Button className="lg:col-span-1 col-span-2 bg-gray-50 flex flex-col gap-2 items-center justify-center border p-5 h-auto border-gray-100 rounded-sm">
                    <Image
                        src={assets.videoPng}
                        alt=""
                        width={26}
                        height={26}
                        className="size-6.5 pointer-events-none select-none"
                    />
                    <span className="sm:text-lg text-sm font-medium text-[#1F2937]">
                        Video
                    </span>
                </Button>
            </div>
        </div>
    );
};

export default CheckInSection;
