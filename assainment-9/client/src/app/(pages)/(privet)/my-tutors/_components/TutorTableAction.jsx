'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { MdOutlineEdit } from 'react-icons/md';
import { RiDeleteBin7Line } from 'react-icons/ri';
import TutorUpdateModal from './modal/TutorUpdateModal';
import TutorDeleteModal from './modal/TutorDeleteModal';

const TutorTableAction = ({ selectedTutor }) => {
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <>
      <div className="flex gap-1 justify-end">
        <Button
          onClick={() => setIsUpdateOpen(true)}
          variant="outline"
          className={'rounded-full h-auto py-1.5 sm:px-4 px-1.5'}
        >
          <MdOutlineEdit />
          <span className="sm:inline hidden">Update</span>
        </Button>
        <Button
          onClick={() => setIsDeleteOpen(true)}
          variant="destructive"
          className={
            'rounded-full h-auto py-1.5 sm:px-4 px-1.5 !bg-transparent border border-red-400'
          }
        >
          <RiDeleteBin7Line />
          <span className="sm:inline hidden">Delete</span>
        </Button>
      </div>

      {/* modals */}
      <TutorUpdateModal
        open={isUpdateOpen}
        setIsOpen={setIsUpdateOpen}
        selectedTutor={selectedTutor}
      />
      <TutorDeleteModal
        open={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
        selectedTutor={selectedTutor}
      />
    </>
  );
};

export default TutorTableAction;
