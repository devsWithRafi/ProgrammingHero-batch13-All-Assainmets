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
import { Separator } from '@/components/ui/separator';
import { useMyTutors } from '@/context/my-tutors/MyTutorsContextProvider';
import { jwtClientToken } from '@/lib/auth-client';
import { cn } from '@/lib/utils';
import { deleteTutor } from '@/services/deleteTutor';
import { useTransition } from 'react';
import { toast } from 'sonner';

const TutorDeleteModal = ({ open, setIsOpen, selectedTutor }) => {
  const [deleting, startDeleting] = useTransition();
  const { loadMyTutors } = useMyTutors();

  const handleDeleteTutor = async () => {
    const getToken = await jwtClientToken();
    if (getToken.success) {
      startDeleting(async () => {
        const result = await deleteTutor({
          token: getToken.token,
          tutorId: selectedTutor._id,
        });
        if (result.success) {
          toast.success(result.message || 'Tutor Deleted Successfull!');
          setIsOpen(false);
          loadMyTutors();
          return;
        }
        return toast.error(result.message || 'Tutor Deleting Failed!');
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent className={cn('font-poppins')}>
        <div
          className={cn(
            'flex flex-col gap-5',
            deleting && 'pointer-events-none cursor-not-allowed opacity-50',
          )}
        >
          <DialogHeader>
            <DialogTitle className={'font-semibold text-xl'}>
              Confirm Deletion
            </DialogTitle>
          </DialogHeader>
          <Separator />
          <DialogDescription className={'text-sm font-medium'}>
            Are you sure want to remove{' '}
            <span className="font-semibold text-primary">
              {selectedTutor?.name.length > 12
                ? selectedTutor?.name.slice(0, 12) + '...'
                : selectedTutor?.name}{' '}
              ?
            </span>{' '}
            <br /> This action cannot be undone.
          </DialogDescription>

          <div className="mt-5 grid grid-cols-2 gap-2">
            <Button
              onClick={() => setIsOpen(false)}
              className="h-auto py-2.5 rounded-full"
              variant="outline"
            >
              Cancel
            </Button>
            <Button
              onClick={handleDeleteTutor}
              className="h-auto py-2.5 rounded-full bg-red-500"
            >
              {deleting ? <Loading text={'Deleting...'} /> : 'Yes, Delete'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TutorDeleteModal;
