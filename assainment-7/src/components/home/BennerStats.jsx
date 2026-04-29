'use client';

import { FriendContext } from '@/context/friendsContext/friendContext';
import { TimelineContext } from '@/context/timelineContext/timelineContext';
import { useContext } from 'react';

const BennerStats = () => {
  const { friendsData } = useContext(FriendContext);
  const { timelineData } = useContext(TimelineContext);

  const onTrack = friendsData.filter(
    (f) => f.days_since_contact <= f.goal,
  ).length;
  const needAttention = friendsData.filter(
    (f) => f.days_since_contact > f.goal,
  ).length;

  const bennerData = [
    { title: 'Total Friends', count: friendsData.length },
    { title: 'On Track', count: onTrack },
    { title: 'Need Attention', count: needAttention },
    { title: 'Interactions This Month', count: timelineData.length },
  ];

  return bennerData.map((item, index) => (
    <div
      key={index}
      className="bg-white flex flex-col items-center justify-center text-center px-5 sm:py-10 py-5 rounded-sm shadow-sm"
    >
      <h2 className="sm:text-3xl text-2xl font-bold">{item.count}</h2>
      <p className="capitalize sm:text-lg text-sm text-gray-400">
        {item.title}
      </p>
    </div>
  ));
};

export default BennerStats;
