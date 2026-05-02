"use client"

import ButtonBlack from '@/components/Button';
import { cn } from '@/lib/utils';
import { toast } from '@heroui/react';

const BorrowButton = ({ isAvailable }) => {
  const handleBorrowBook = () => {
    toast.success('Book borrowed successfully!');
  };

  return (
    <ButtonBlack
      onClick={handleBorrowBook}
      className={cn(
        'rounded-xl w-full hover:scale-100',
        !isAvailable && 'opacity-50 pointer-events-none',
      )}
    >
      Borrow This Book
    </ButtonBlack>
  );
};

export default BorrowButton;
