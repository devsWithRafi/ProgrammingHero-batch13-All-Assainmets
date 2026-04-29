'use client';

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { useContext } from 'react';
import { TimelineContext } from '@/context/timelineContext/timelineContext';
import { AiOutlineWarning } from 'react-icons/ai';

const StatePieChart = () => {
  const { timelineData } = useContext(TimelineContext);

  const text = timelineData.filter(
    (item) => item.type.toLowerCase() === 'text',
  );
  const call = timelineData.filter(
    (item) => item.type.toLowerCase() === 'call',
  );
  const video = timelineData.filter(
    (item) => item.type.toLowerCase() === 'video',
  );

  const data = [
    { name: 'Text', value: text.length, color: '#8a2be2' },
    { name: 'Call', value: call.length, color: '#2f4f4f' },
    { name: 'Video', value: video.length, color: '#2e8b57' },
  ];

  return (
    // Ensure the parent has a defined height, e.g., h-[350px]
    <div className="w-full sm:h-[500px] h-[300px] bg-white shadow-sm rounded-sm p-5 sm:mt-10 mt-5 flex flex-col">
      {timelineData.length > 0 ? (
        <>
          <h3 className="font-semibold sm:text-xl text-sm text-deepGreen">
            By Interaction Type
          </h3>

          <div className="flex-1 w-full min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius="70%"
                  outerRadius="90%"
                  paddingAngle={10}
                  cornerRadius={5}
                  stroke="none"
                  label
                >
                  {data.map((item, index) => (
                    <Cell key={index} fill={item.color} />
                  ))}
                </Pie>
                <Tooltip defaultIndex={data} />
                <RechartsDevtools />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center gap-5 justify-center mt-4">
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <div
                  style={{ background: item.color }}
                  className="size-2.5 rounded-full"
                />
                <span className="text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="w-full h-full text-center flex flex-col items-center justify-center gap-1">
          <AiOutlineWarning className="sm:text-8xl text-6xl text-orange-300" />
          <h2 className="text-gray-700 sm:text-xl text-lg font-semibold ">
            Oops! No data found
          </h2>
          <p className="text-gray-400 sm:text-sm text-xs">
            Looks like you haven't added any interactions yet
          </p>
        </div>
      )}
    </div>
  );
};

export default StatePieChart;
