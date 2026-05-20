'use client';

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
import { cancelBookedSession } from '@/services/cancelBookedSession';
import { toast } from 'sonner';

const ConfirmCancelSessionModal = ({ open, setIsOpen, selectedSession }) => {
  const { loadSessionData } = useMyBookSession();
  const handleCancelSession = async () => {
    const getToken = await jwtClientToken();
    if (getToken) {
      const result = await cancelBookedSession({
        id: selectedSession?._id,
        token: getToken.token,
      });
      if (result.success) {
        loadSessionData();
        setIsOpen(false);
        toast.success(result.message || 'Session Cancelled Successfully', {
          position: 'top-center',
        });
      } else {
        toast.error(result.message || 'Session Cancellation Failed', {
          position: 'top-center',
        });
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent className={'font-poppins'}>
        <DialogHeader>
          <DialogTitle className={'text-xl font-semibold'}>
            Cancel Session
          </DialogTitle>
          <DialogDescription>
            Cancel this session with{' '}
            <span className="font-semibold text-primary">
              {selectedSession?.tutorName}
            </span>
          </DialogDescription>

          <div className="w-full rounded-sm border bg-muted p-4 flex flex-col gap-1 my-4">
            <span className="text-muted-foreground font-medium flex items-center justify-between gap-3">
              Tutor ID:{' '}
              <span className="font-semibold text-primary">
                {selectedSession?.tutorId &&
                  selectedSession?.tutorId?.slice(0, 10)}
                ...
              </span>
            </span>
            <span className="text-muted-foreground font-medium flex items-center justify-between gap-3">
              Student:{' '}
              <span className="font-semibold text-primary">
                {selectedSession?.name}
              </span>
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button
              onClick={() => setIsOpen(false)}
              variant="outline"
              className={'h-auto p-2.5 rounded-full'}
            >
              Keep Session
            </Button>
            <Button
              onClick={handleCancelSession}
              variant="destructive"
              className={'h-auto p-2.5 rounded-full'}
            >
              Yes, Cancel
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmCancelSessionModal;
