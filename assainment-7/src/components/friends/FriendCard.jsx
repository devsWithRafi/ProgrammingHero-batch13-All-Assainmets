import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const statusStyle = {
    almost_due: 'bg-[#EFAD44] text-white',
    overdue: 'bg-[#EF4444] text-white',
    on_track: 'bg-[#244D3F] text-white',
};

const formateStatus = (status) => {
    return status.toLowerCase().replaceAll(' ', '_').replaceAll('-', '_');
};

const FriendCard = ({ friend, className }) => {
    return (
        <div
            className={cn(
                'bg-white w-full shadow-sm p-5 py-10 text-center rounded-sm flex gap-1 flex-col items-center justify-center',
                className,
            )}
        >
            <Image
                src={friend.picture}
                alt={friend.name}
                width={80}
                height={80}
                className="size-20 rounded-full"
            />
            <h2 className="text-xl font-semibold mt-4">{friend.name}</h2>
            <p className="text-sm text-gray-400">
                {friend.days_since_contact}d ago
            </p>

            {/* tags */}
            <div className="flex gap-2 flex-wrap text-sm items-center justify-center uppercase mt-3">
                {friend.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-[#CBFADB] font-medium text-deepGreen text-sm px-2.5 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* status */}
            <span
                className={cn(
                    'text-sm capitalize mt-3 rounded-full px-2.5 py-1',
                    statusStyle[formateStatus(friend.status)],
                )}
            >
                {friend.status}
            </span>
        </div>
    );
};

export default FriendCard;
