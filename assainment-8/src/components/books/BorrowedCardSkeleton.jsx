import { Skeleton } from '@heroui/react';

const BorrowedCardSkeleton = ({ amount = 4 }) => {
  return [...Array(amount)].map((_, index) => (
    <div
      key={index}
      className="p-4 flex items-start gap-4 bg-white shadow-sm rounded-md">
      <Skeleton className="min-w-[35%] max-w-[35%] aspect-[2/3] overflow-hidden" />
      <div className="w-full h-full flex flex-col items-start justify-between gap-2">
        <span className="w-full flex flex-col gap-1">
          <Skeleton className="w-1/2 rounded h-[10px]" />
          <Skeleton className="w-[90%] rounded h-4 mt-2" />
          <Skeleton className="w-2/5 rounded h-3 mt-2" />
          <Skeleton className="w-[95%] rounded h-3 mt-2" />
          <Skeleton className="w-[95%] rounded h-3" />
        </span>
        <Skeleton className="w-full rounded-full h-5" />
      </div>
    </div>
  ));
};

export default BorrowedCardSkeleton;
