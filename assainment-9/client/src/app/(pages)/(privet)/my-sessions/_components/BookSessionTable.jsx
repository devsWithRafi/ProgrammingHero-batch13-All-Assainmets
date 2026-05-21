'use client';

import { useState } from 'react';
import EmptyBookSessionState from './EmptyBookSessionState';
import PageLoader from '@/components/PageLoader';
import { toast } from 'sonner';
import { useMyBookSession } from '@/context/session-context/BookSessionContextProvider';
import DataLoader from '@/components/DataLoader';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { GoDotFill } from 'react-icons/go';
import SectionTitle from '@/components/SectionTitle';
import ConfirmCancelSessionModal from './ConfirmCancelSessionModal';

const BookSessionTable = () => {
  const { loading, myBookSession } = useMyBookSession();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState({});

  const statusStyle = {
    confirmed: 'dark:text-green-500 text-green-700 bg-green-400/20',
    cancelled: 'dark:text-red-400 text-red-700 bg-red-400/20',
    pending: 'dark:text-zinc-400 text-zinc-600 bg-zinc-400/20',
  };

  const handleOpenModal = (id) => {
    const session = myBookSession.find((item) => item._id === id);
    if (!session) {
      toast.error('Something went wrong! Please try again!');
      return;
    }
    setSelectedSession(session);
    setModalOpen(true);
  };

  const totalActiveSessions =
    (Array.isArray(myBookSession) &&
      myBookSession.filter((item) => item.status.toLowerCase() === 'confirmed')
        .length) ||
    0;

  return (
    <>
      <div>
        <span className="flex flex-wrap items-center gap-5">
          <SectionTitle title={'My Booked Sessions'} />
          <span className="bg-muted py-0.5 px-4 rounded-full text-sm dark:bg-orange-200/20 dark:text-orange-200 text-zinc-600 font-medium">
            {totalActiveSessions} Active
          </span>
        </span>
        <p className="text-muted-foreground font-medium text-sm">
          Manage and track all the sessions you’ve booked with tutors
        </p>
      </div>
      {loading ? (
        <DataLoader className={'mt-10'} />
      ) : Array.isArray(myBookSession) && myBookSession.length > 0 ? (
        <div className="mt-10 border rounded-lg overflow-x-auto">
          <Table className={''}>
            <TableHeader className={'bg-muted sm:h-12'}>
              <TableRow className={'sm:text-sm text-xs font-poppins'}>
                <TableHead className={'sm:px-5'}>#</TableHead>
                <TableHead className={'sm:px-5'}>Tutor Name</TableHead>
                <TableHead className={'sm:px-5'}>Student Name</TableHead>
                <TableHead className={'sm:px-5'}>Email</TableHead>
                <TableHead className={'sm:px-5'}>Phone</TableHead>
                <TableHead className={'sm:px-5'}>Status</TableHead>
                <TableHead className={'text-right sm:px-5'}>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.isArray(myBookSession) &&
                myBookSession.map((item, index) => (
                  <TableRow key={item._id} className={'bg-card sm:h-15'}>
                    <TableCell className="font-medium sm:px-5 sm:text-sm text-xs text-muted-foreground">
                      {index + 1}
                    </TableCell>
                    <TableCell className="font-medium sm:px-5 sm:text-sm text-xs text-muted-foreground">
                      {item.tutorName}
                    </TableCell>
                    <TableCell className="font-medium sm:px-5 sm:text-sm text-xs text-muted-foreground">
                      {item.name}
                    </TableCell>
                    <TableCell className="font-medium sm:px-5 sm:text-sm text-xs text-muted-foreground">
                      {item.email}
                    </TableCell>
                    <TableCell className="font-medium sm:px-5 sm:text-sm text-xs text-muted-foreground">
                      {item.phoneNumber}
                    </TableCell>
                    <TableCell className="font-medium sm:px-5">
                      <span
                        className={cn(
                          'px-3 text-xs py-1 rounded-full inline-flex items-center gap-1',
                          statusStyle[item.status.toLowerCase()],
                        )}
                      >
                        <GoDotFill />
                        {item.status}
                      </span>
                    </TableCell>
                    <TableCell className="font-medium text-right sm:px-5">
                      {item.status === 'Confirmed' ? (
                        <Button
                          onClick={() => handleOpenModal(item._id)}
                          className={
                            'rounded-full px-5 !bg-transparent border border-red-400'
                          }
                          variant="destructive"
                        >
                          Cancel
                        </Button>
                      ) : (
                        'No Action'
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <EmptyBookSessionState />
      )}

      {/* cancel session modal */}
      <ConfirmCancelSessionModal
        open={modalOpen}
        setIsOpen={setModalOpen}
        selectedSession={selectedSession}
      />
    </>
  );
};

export default BookSessionTable;
