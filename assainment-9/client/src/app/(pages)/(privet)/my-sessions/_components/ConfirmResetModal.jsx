'use client';
import Loading from '@/components/Loading';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useMyBookSession } from '@/context/session-context/BookSessionContextProvider';
import { jwtClientToken } from '@/lib/auth-client';
import { cn } from '@/lib/utils';
import { deleteAllBookedSessionsRecords } from '@/services/deleteAllBookedSessionsRecords';
import { useTransition } from 'react';
import { toast } from 'sonner';

const ConfirmResetModal = ({ isOpen, setIsOpen }) => {
  const [deletePending, startDeletePending] = useTransition(false);
  const { loadSessionData } = useMyBookSession();

  const handleResetSessions = () => {
    startDeletePending(async () => {
      try {
        const getToken = await jwtClientToken();
        if (getToken.success) {
          const result = await deleteAllBookedSessionsRecords({
            token: getToken.token,
          });
          if (result.success) {
            toast.success(result.message || 'Sessions Reset Successfull!');
            loadSessionData();
            setIsOpen(false);
            return;
          }
          return toast.error(result.message || 'Sessions Reset Failed!');
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message || 'Something went wrong! Please try again!');
        return;
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="font-poppins">
        <div
          className={cn(
            'flex flex-col gap-8',
            deletePending &&
              'opacity-50 pointer-events-none cursor-not-allowed',
          )}
        >
          <DialogHeader>
            <DialogTitle className={'text-xl font-semibold'}>
              Reset Sessions Records
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to reset your all sessions records? This
              action cannot be undone.
              <span className="font-semibold text-primary"></span>
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-2">
            <Button
              onClick={() => setIsOpen(false)}
              type="button"
              variant="outline"
              className={'h-auto p-2.5 rounded-full'}
            >
              Cancel
            </Button>
            <Button
              onClick={handleResetSessions}
              type="button"
              variant="destructive"
              className={'h-auto p-2.5 rounded-full'}
            >
              {deletePending ? (
                <Loading
                  className={'font-normal text-red-400'}
                  text={'Processing...'}
                />
              ) : (
                'Reset All'
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmResetModal;
