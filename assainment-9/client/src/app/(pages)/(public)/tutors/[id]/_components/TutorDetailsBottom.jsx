import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { fixedSampleData, formateTimeSlot } from '@/lib/fixedSampleData';
import { cn } from '@/lib/utils';
import { PiWarningCircleBold } from 'react-icons/pi';

const TutorDetailsBottom = ({ tutor }) => {
  const availabileTimeSlots = fixedSampleData.timeSlots.map((t) =>
    formateTimeSlot(t),
  );

  const isInAbilableTimeSlots = (key) => {
    return tutor.availableTimeSlot && tutor.availableTimeSlot.includes(key);
  };

  return (
    <Card className="w-full sm:px-5 sm:py-8">
      <CardHeader className={'flex flex-wrap items-center justify-between gap-1'}>
        <CardTitle className="sm:text-2xl text-xl font-semibold">
          Weekly Availability
        </CardTitle>
        <CardDescription className={'flex items-center gap-1 text-orange-300 sm:text-sm text-xs'}>
          <PiWarningCircleBold className='sm:size-5 size-4' />
          Times are in BD(UTC+6)
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* weekly availability */}
        <div className="flex items-center flex-wrap gap-3">
          {fixedSampleData.availableDays.map((day, index) => (
            <span
              key={index}
              className={cn(
                'sm:text-sm text-xs bg-muted font-medium sm:py-3 py-2 sm:px-6 px-4 rounded-sm text-muted-foreground',
                tutor.availableDays &&
                  tutor.availableDays.includes(day) &&
                  'bg-primary text-primary-foreground',
              )}
            >
              {day}
            </span>
          ))}
        </div>

        {/* time slots */}
        <div className="grid lg:grid-cols-4 grid-cols-2 items-center gap-3 mt-7">
          {availabileTimeSlots.map((item, index) => {
            const [key, value] = Object.entries(item)[0];
            return (
              <div
                key={index}
                className={cn(
                  'w-full bg-muted border sm:p-5 p-3 rounded-sm flex flex-col items-center justify-center gap-1',
                  isInAbilableTimeSlots(key) &&
                    'bg-orange-300/10 text-primary-foreground border-orange-200',
                )}
              >
                <CardDescription
                  className={cn(
                    'text-xs font-medium text-center',
                    isInAbilableTimeSlots(key) && 'text-orange-400',
                  )}
                >
                  {key}
                </CardDescription>
                <CardTitle
                  className={cn(
                    'sm:text-lg text-sm font-semibold text-center',
                    isInAbilableTimeSlots(key) &&
                      'dark:text-orange-200 text-orange-300',
                  )}
                >
                  {value}
                </CardTitle>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default TutorDetailsBottom;
