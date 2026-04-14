'use client';

import React, { useEffect, useState } from 'react';
import { TimelineContext } from './timelineContext';

const TimelineContextProvider = ({ children }) => {
    const [timelineData, setTimelineData] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem('timelineData');
        if (storedData) {
            setTimelineData(JSON.parse(storedData));
        }
    }, []);

    console.log('timelineData:', timelineData);

    const addNewTimeline = (newTimeline) => {
        const currentDate = new Date();

        const updateData = [
            ...timelineData,
            { ...newTimeline, date: currentDate.toString() },
        ];

        setTimelineData(updateData);
        localStorage.setItem('timelineData', JSON.stringify(updateData));
    };

    return (
        <TimelineContext value={{ timelineData, addNewTimeline }}>
            {children}
        </TimelineContext>
    );
};

export default TimelineContextProvider;
