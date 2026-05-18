import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IoLocationOutline } from 'react-icons/io5';
import { LuLaptopMinimal } from 'react-icons/lu';
import { Separator } from '@/components/ui/separator';

const TutorCard = ({ tutor }) => {
  return (
    <Card className="overflow-hidden relative py-0 pb-3 group">
      <CardHeader className="p-0 ">
        <span className="bg-white z-1 font-poppins text-black px-2.5 py-0.5 rounded-full text-sm absolute top-2 left-2">
          Available
        </span>
        <div className="w-full h-full overflow-hidden">
          <Image
            src={tutor.photo}
            alt={tutor.name}
            width={700}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 duration-300 ease-in-out"
          />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="font-semibold text-xl max-w-[90%] text-ellipsis whitespace-nowrap overflow-hidden">
          {tutor.name}
        </CardTitle>
        <CardDescription className="text-sm font-medium max-w-[90%] text-ellipsis whitespace-nowrap overflow-hidden">
          {tutor.institution}
        </CardDescription>
        <div className="w-full flex flex-wrap gap-2 mt-2">
          <span className="flex items-center gap-1 text-xs bg-muted py-0.5 px-2 rounded-full text-muted-foreground">
            <IoLocationOutline />
            {tutor.location}
          </span>
          <span className="flex items-center gap-1 text-xs bg-muted py-0.5 px-2 rounded-full text-muted-foreground">
            <LuLaptopMinimal />
            {tutor.teachingMode}
          </span>
        </div>

        <Separator className="my-4" />

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-2xl">
            ৳ {tutor.hourlyFee}{' '}
            <span className="text-muted-foreground font-medium text-sm">
              /hr
            </span>
          </h3>

          <div className="flex items-center flex-wrap gap-3">
            {tutor.availableDays.map((day, index) => (
              <span
                key={index}
                className="text-sm bg-muted font-medium py-0.5 px-2 rounded-sm text-muted-foreground"
              >
                {day}
              </span>
            ))}
          </div>
        </div>

        <Button className="w-full mt-5 h-auto p-2">Book a Session</Button>
      </CardContent>
    </Card>
  );
};

export default TutorCard;
