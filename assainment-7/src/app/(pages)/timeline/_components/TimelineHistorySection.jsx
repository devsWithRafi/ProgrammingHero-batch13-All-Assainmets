'use client';

import { assets } from '@/assets/assets';
import TimelineHistoryBox from '@/components/TimelineHistoryBox';
import { TimelineContext } from '@/context/timelineContext/timelineContext';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useContext } from 'react';

const TimelineHistorySection = () => {
    const { timelineData } = useContext(TimelineContext);
    const searchParams = useSearchParams();
    const filter = searchParams.get('filter');
    const search = searchParams.get('search');
    const sort = searchParams.get('sort');

    const filterdData = timelineData
        .filter((data) => {
            const matchFilter =
                !filter || filter === 'all'
                    ? true
                    : data.type.toLowerCase() === filter.toLowerCase();
            const matchSearch = !search
                ? true
                : data.title.toLowerCase().includes(search.toLowerCase());

            return matchFilter && matchSearch;
        })
        .sort((a, b) => {
            if (!sort) return 0;

            if (sort === 'newest') {
                return new Date(b.date) - new Date(a.date);
            }

            if (sort === 'oldest') {
                return new Date(a.date) - new Date(b.date);
            }

            return 0;
        });

    return (
        <>
            {filterdData.length > 0 ? (
                filterdData.map((data, index) => (
                    <TimelineHistoryBox key={index} data={data} />
                ))
            ) : (
                <div className="h-100 flex flex-col items-center justify-center">
                    <Image
                        src={assets.notFoundPng}
                        alt="not-found"
                        width={100}
                        height={100}
                        className="select-none pointer-events-none opacity-40"
                    />
                    <p className="text-gray-400 text-lg mt-3">
                        Oops! No Data Found
                    </p>
                </div>
            )}
        </>
    );
};

export default TimelineHistorySection;
