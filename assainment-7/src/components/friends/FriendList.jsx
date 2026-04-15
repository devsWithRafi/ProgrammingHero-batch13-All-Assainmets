'use client';

import React, { useContext } from 'react';
import FriendCard from './FriendCard';
import { FriendContext } from '@/context/friendsContext/friendContext';
import { Spinner } from '../ui/spinner';
import Link from 'next/link';

const FriendList = () => {
    const { friendsData, loading } = useContext(FriendContext);

    return loading ? (
        <div className="w-full h-100 flex gap-1 items-center justify-center">
            <Spinner />
            <span className="text-gray-500 text-sm">Loading...</span>
        </div>
    ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
            {friendsData.length > 0 &&
                friendsData.map((friend) => (
                    <Link key={friend.id} href={`/friends/${friend.id}`}>
                        <FriendCard friend={friend} />
                    </Link>
                ))}
        </div>
    );
};

export default FriendList;
