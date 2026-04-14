import { assets } from '@/assets/assets';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const HistoryBox = ({ className }) => {
    return (
        <div
            className={cn(
                'flex items-center gap-5 justify-between sm:px-4 px-0 py-4 border-b border-gray-100',
                className,
            )}
        >
            <div className="w-full flex items-center sm:gap-4 gap-2">
                <Image
                    src={assets.videoPng}
                    alt="video-icon"
                    width={25}
                    height={25}
                />
                <span className='w-full'>
                    <h2 className="text-lg font-medium">Text</h2>
                    <p className="text-sm text-gray-400 w-[95%] text-ellipsis overflow-hidden text-nowrap">
                        Asked for career advice
                    </p>
                </span>
            </div>

            <p className="sm:text-sm text-xs text-gray-400 text-nowrap">Jan 28, 2026</p>
        </div>
    );
};

export default HistoryBox;
