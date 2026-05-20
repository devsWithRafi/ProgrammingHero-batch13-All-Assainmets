'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import BookSessionForm from './BookSessionForm';
import { PiWarningCircle } from 'react-icons/pi';
import { format } from 'date-fns';

const supports = [
  '1-on-1 Personalized Session',
  'Digital PDF Lecture Notes',
  'Weekly Mock Test Access',
];

const TutorDetailsRight = ({ tutor }) => {
  return (
    <Card className="lg:min-w-100 lg:max-w-100 md:min-w-80 md:max-w-80 w-full bg-primary sm:px-5 sm:py-8 px-3 py-5 z-1">
      <CardHeader>
        <CardDescription className={'font-medium text-xs'}>
          HOURLY RATE
        </CardDescription>
        <CardTitle
          className={
            'text-orange-100 dark:text-muted font-bold font-ring sm:text-5xl text-4xl mt-2'
          }
        >
          ৳{tutor.hourlyFee}
          <span className="text-muted-foreground text-sm font-poppins font-medium">
            / session
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent className={'flex flex-col gap-3'}>
        <div className="w-full flex flex-col gap-3">
          <CardDescription
            className={'flex items-center justify-between gap-5'}
          >
            <span>Availability</span>
            <span>{tutor.totalSlot} slots remaining</span>
          </CardDescription>
          <div className="w-full bg-muted-foreground rounded-full">
            <Progress className={'w-[70%] rotate-180'} />
          </div>
        </div>

        <div className="py-5 flex flex-col gap-4">
          {supports.map((item, index) => (
            <CardDescription key={index} className={'flex items-center gap-2'}>
              <IoIosCheckmarkCircle className="text-muted sm:size-5.5 size-4" />
              <span className="text-zinc-400 dark:text-zinc-500">{item}</span>
            </CardDescription>
          ))}
        </div>

        {tutor.sessionStartDate && (
          <div className="w-full rounded-sm border border-orange-300/30 p-5 flex gap-2 bg-orange-300/10">
            <PiWarningCircle className="text-orange-300 size-5" />
            <CardDescription className={'flex flex-wrap gap-2'}>
              Booking opens on
              <span className="text-muted font-medium">
                {format(new Date(tutor.sessionStartDate), 'dd/mm/yyyy')}
              </span>
            </CardDescription>
          </div>
        )}

        <BookSessionForm tutor={tutor} />

        <CardDescription className={'text-center text-xs mt-5'}>
          100% Satisfaction Guarantee or Full Refund
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default TutorDetailsRight;
