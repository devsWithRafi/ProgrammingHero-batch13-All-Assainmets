'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { jwtClientToken } from '@/lib/auth-client';
import { fetchOneTutorData } from '@/services/apis/fetchOneTutorData';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LiaGraduationCapSolid } from 'react-icons/lia';
import { GrLocation } from 'react-icons/gr';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import TutorDetailsBottom from './TutorDetailsBottom';
import TutorDetailsRight from './TutorDetailsRight';
import { format } from 'date-fns';

import { IoMdBook } from 'react-icons/io';
import { IoVideocamOutline } from 'react-icons/io5';
import { CalendarClock } from 'lucide-react';
import { cn } from '@/lib/utils';
import PageLoader from '@/components/PageLoader';

const TutorDetails = () => {
  const { id } = useParams();
  const [tutor, setTutor] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchTutor = async () => {
    try {
      const getToken = await jwtClientToken();
      if (getToken.success) {
        const data = await fetchOneTutorData({ id, token: getToken.token });
        setTutor(data);
      } else {
        setTutor({});
        console.log('Auth-Token not found');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTutor();
  }, [id]);

  if (!tutor) {
    return notFound();
  }

  const sessionDetails = [
    {
      title: 'Subject',
      value: tutor.subject ? tutor.subject : '',
      icon: IoMdBook,
    },
    {
      title: 'Teaching mode',
      value: tutor.teachingMode ? tutor.teachingMode : '',
      icon: IoVideocamOutline,
    },
    {
      title: 'Session start date',
      value: tutor.sessionStartDate
        ? format(new Date(tutor.sessionStartDate), 'dd/mm/yyyy')
        : '',
      icon: CalendarClock,
    },
  ];

  return isLoading ? (
    <PageLoader className={'h-[calc(100vh-65px)]'} />
  ) : (
    <div>
      {/* TOP */}
      {tutor?.photo && (
        <div className="w-full h-[50vh] overflow-hidden opacity-60">
          <Image
            width={1000}
            height={500}
            alt={tutor?.name || 'tutor'}
            src={tutor.photo}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="flex md:flex-row flex-col-reverse gap-5 items-start justify-between w-full max-w-[1500px] mx-auto p-5 -mt-20 z-[1]">
        {/* LEFT SIDE */}
        <div className="w-full flex flex-col gap-5">
          {/* top */}
          <Card className="w-full sm:px-5 sm:py-8 relative">
            <CardHeader className={'flex gap-5'}>
              {tutor.photo && (
                <div className="min-w-20 max-w-20 border-4 aspect-square overflow-hidden rounded-full">
                  <Image
                    src={tutor.photo}
                    alt={tutor.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <CardDescription className="bg-muted px-3 py-1 rounded-sm absolute right-3 top-3 flex items-center gap-1 font-medium capitalize sm:text-sm text-xs">
                <MdOutlineStarPurple500 className="text-orange-300 sm:size-5 size-4" />
                <span className="text-primary font-bold sm:text-sm text-xs">
                  {'5.0'}
                </span>{' '}
                (124 Reviews)
              </CardDescription>

              <div>
                <CardTitle className="sm:text-4xl text-3xl font-semibold font-viga">
                  {tutor.name}
                </CardTitle>
                <div className="flex flex-wrap items-center sm:gap-5 gap-2 sm:mt-2">
                  <CardDescription className="flex items-center gap-1 font-medium capitalize sm:text-sm text-xs">
                    <LiaGraduationCapSolid className="sm:size-5.5 size-4.5" />{' '}
                    {tutor.institution}
                  </CardDescription>
                  <Separator orientation="vertical" />
                  <CardDescription className="flex items-center gap-1 font-medium capitalize sm:text-sm text-xs">
                    <GrLocation className="sm:size-5 size-4" /> {tutor.location}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="mt-5 flex gap-10">
                <span className="flex flex-col sm:gap-1">
                  <span className="uppercase text-muted-foreground font-medium sm:text-sm text-xs">
                    EXPERIENCE
                  </span>
                  <span className="sm:text-2xl text-xl font-semibold">
                    {tutor.experience} Years
                  </span>
                </span>
                <span className="flex flex-col sm:gap-1">
                  <span className="uppercase text-muted-foreground font-medium sm:text-sm text-xs">
                    STUDENTS
                  </span>
                  <span className="sm:text-2xl text-xl font-semibold">
                    450+
                  </span>
                </span>
              </div>

              <Separator className="my-5" />

              <div>
                <CardTitle className="sm:text-2xl text-xl font-semibold">
                  About
                </CardTitle>
                <CardDescription className={'font-medium sm:text-sm text-xs'}>
                  {tutor.about}
                </CardDescription>
              </div>

              <Separator className="my-5" />

              <div>
                <CardTitle className="sm:text-2xl text-xl font-semibold">
                  Session details
                </CardTitle>

                <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-5 gap-2 mt-2">
                  {sessionDetails.map((item, index) => (
                    <div
                      key={index}
                      className={cn(
                        'p-4 bg-muted rounded-sm overflow-hidden',
                        sessionDetails.length - 1 === index &&
                          'sm:col-span-1 col-span-2',
                      )}
                    >
                      <CardDescription className="flex items-center gap-1 text-xs font-medium capitalize">
                        <item.icon className="size-4" /> {item.title}
                      </CardDescription>
                      <CardTitle
                        className={
                          'font-semibold sm:text-lg text-sm font-poppins mt-1'
                        }
                      >
                        {item.value}
                      </CardTitle>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* bottom */}
          <TutorDetailsBottom tutor={tutor} />
        </div>

        {/* RIGHT SIDE */}
        <TutorDetailsRight tutor={tutor} fetchTutor={fetchTutor} />
      </div>
    </div>
  );
};

export default TutorDetails;
