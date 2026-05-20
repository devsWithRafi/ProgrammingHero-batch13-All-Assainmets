'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import SectionTitle from '@/components/SectionTitle';
import PageLoader from '@/components/PageLoader';
import { useMyTutors } from '@/context/my-tutors/MyTutorsContextProvider';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import EmptyMyTutorsState from './EmptyMyTutorsState';
import { MdOutlineEdit } from 'react-icons/md';
import { RiDeleteBin7Line } from 'react-icons/ri';
import TutorTableAction from './TutorTableAction';

const MyTutorsTable = () => {
  const { loading, myTutors } = useMyTutors();

  return loading ? (
    <PageLoader className={'w-full h-[calc(100vh-100px)]'} />
  ) : (
    <>
      <SectionTitle title={'My Tutors'} />
      {myTutors.length > 0 ? (
        <div className="mt-10 border rounded-lg overflow-x-auto">
          <Table className={''}>
            <TableHeader className={'bg-muted sm:h-12'}>
              <TableRow className={'sm:text-sm text-xs font-poppins uppercase'}>
                <TableHead className={'sm:px-5'}>Photo</TableHead>
                <TableHead>Tutor Name</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Available Days</TableHead>
                <TableHead>Slots</TableHead>
                <TableHead>Fee</TableHead>
                <TableHead className={'text-right sm:px-5'}>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.isArray(myTutors) &&
                myTutors.map((tutor) => (
                  <TableRow key={tutor._id} className={'bg-card sm:h-15'}>
                    {/* Photo */}
                    <TableCell className="sm:px-5">
                      {tutor.photo && (
                        <div className="overflow-hidden rounded-full border-3 sm:w-13 w-10 max-w-40 aspect-square">
                          <Image
                            src={tutor.photo}
                            width={200}
                            height={200}
                            alt={tutor.name || 'photo'}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </TableCell>

                    {/* Tutor Name */}
                    <TableCell>
                      <span className="flex flex-col">
                        {tutor.name}
                        <span className="text-muted-foreground text-xs">
                          {tutor.location.length > 16 ? tutor.location.slice(0, 16) + '...' : tutor.location}
                        </span>
                      </span>
                    </TableCell>

                    {/* Subject */}
                    <TableCell>
                      <span className="dark:bg-orange-200/20 bg-muted text-zinc-600 dark:text-orange-200 rounded-full py-1 px-3 text-xs font-medium">
                        {tutor.subject}
                      </span>
                    </TableCell>

                    {/* Available Days */}
                    <TableCell>
                      <div className="flex items-center flex-wrap gap-1">
                        {tutor.availableDays.map((day, index) => (
                          <span
                            key={index}
                            className="text-xs bg-muted font-medium rounded-full size-5.5 flex items-center justify-center aspect-square text-muted-foreground"
                          >
                            {day.charAt(0)}
                          </span>
                        ))}
                      </div>
                    </TableCell>

                    {/* Slots */}
                    <TableCell>
                      {tutor.totalSlot > 0 ? (
                        <span>{tutor.totalSlot} Slots Left</span>
                      ) : (
                        <span className="text-red-500">Fully Booked</span>
                      )}
                    </TableCell>

                    {/* Fee */}
                    <TableCell>
                      <span className="font-semibold">
                        ৳{tutor.hourlyFee}
                        <span className="text-muted-foreground text-xs font-normal">
                          /hr
                        </span>
                      </span>
                    </TableCell>

                    {/* Action */}
                    <TableCell className="sm:px-5 text-right">
                      <TutorTableAction selectedTutor={tutor} />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <EmptyMyTutorsState />
      )}
    </>
  );
};

export default MyTutorsTable;
