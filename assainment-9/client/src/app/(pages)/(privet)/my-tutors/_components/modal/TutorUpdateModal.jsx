import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import UpdateTutorsForm from '../UpdateTutorsForm';
import Image from 'next/image';

const TutorUpdateModal = ({ open, setIsOpen, selectedTutor }) => {
  return (
    <Dialog
      open={open}
      onOpenChange={setIsOpen}
      className={'p-0 w-full max-w-[700px]'}
    >
      <DialogContent
        className={'sm:max-w-200 font-poppins p-0 max-h-[80vh] overflow-y-auto'}
      >
        <DialogHeader className="p-6 pb-0 flex flex-row items-center">
          {selectedTutor.photo && (
            <div className="overflow-hidden border-3 w-15 max-w-20 aspect-square rounded-full">
              <Image
                src={selectedTutor.photo}
                width={200}
                height={200}
                alt="photo"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <span className="flex flex-col gap-1">
            <DialogTitle>Update Tutor</DialogTitle>
            <DialogDescription>
              <span>{selectedTutor.name} - {selectedTutor.subject}</span>
            </DialogDescription>
          </span>
        </DialogHeader>
        <UpdateTutorsForm selectedTutor={selectedTutor} />
      </DialogContent>
    </Dialog>
  );
};

export default TutorUpdateModal;
