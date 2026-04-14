import { assets } from '@/assets/assets';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const imageType = {
    video: assets.videoPng,
    call: assets.callPng,
    text: assets.textPng,
};

const TimelineHistoryBox = ({ className, data }) => {

    return (
        <div
            className={cn(
                'flex items-center sm:gap-4 gap-2 justify-between p-5 bg-white shadow-sm rounded-sm',
                className,
            )}
        >
            {data.type && (
                <Image
                    src={imageType[data.type.toLowerCase()]}
                    alt="video-icon"
                    width={40}
                    height={40}
                />
            )}
            <span className="w-full ">
                <h2 className="text-lg font-medium flex items-center gap-2 capitalize">
                    {data.type}
                    <span className="text-sm font-normal text-gray-400 w-[95%] text-ellipsis overflow-hidden text-nowrap">
                        {data.title.split(' ').slice(1).join(' ')}
                    </span>
                </h2>
                <p className="sm:text-sm text-xs text-gray-400 text-nowrap">
                    Jan 28, 2026
                </p>
            </span>
        </div>
    );
};

export default TimelineHistoryBox;
