import { Skeleton } from '@heroui/react';

const BooksCardSkeleton = () => {
  return (
    <section className="w-full grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 max-[460px]:gap-1.5">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="bg-white shadow-sm rounded-2xl">
          {/* image */}
          <div className="w-full aspect-square overflow-hidden p-2 rounded-lg max-[460px]:p-1.5">
            <Skeleton className="w-full h-full" />
          </div>

          {/* details */}
          <div className="text-center w-full flex flex-col gap-2 pb-3 px-3 mt-2.5 max-[460px]:mt-1">
            <Skeleton className="w-[90%] h-5 mx-auto rounded-full max-[460px]:h-4" />
            <Skeleton className="w-1/2 h-4 mx-auto rounded-full max-[460px]:h-3" />
            <Skeleton className="w-full h-7 mx-auto rounded-full mt-2 max-[460px]:mt-1 max-[460px]:h-6" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default BooksCardSkeleton;
