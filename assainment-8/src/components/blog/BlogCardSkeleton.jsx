import { Skeleton } from '@heroui/react';

const BlogCardSkeleton = () => {
  return (
    <div className="w-full flex gap-5 overflow-x-auto mt-10 py-5 px-0.5">
      {[...Array(2)].map((_, index) => (
        <div
          key={index}
          className="sm:!min-w-[600px] sm:w-full  flex-1 !min-w-[400px] h-full group shrink-0 flex rounded-xl overflow-hidden bg-white shadow-sm"
        >
          <div className="sm:min-w-[270px] sm:max-w-[270px] min-w-[200px] max-w-[200px] aspect-square overflow-hidden">
            <Skeleton className="w-full h-full" />
          </div>

          <div className="w-full bg-white rounded-xl p-5 -ml-8 z-1">
            <Skeleton className="w-35 h-4" />
            <Skeleton className="w-2/3 h-7 sm:mt-15 mt-10" />
            <Skeleton className="w-2/3 h-4 mt-3" />
            <Skeleton className="w-2/4 h-4 mt-3" />

            <div className="flex items-center gap-3 mt-5">
              <Skeleton className="size-7 rounded-full" />
              <Skeleton className="w-30 h-4" />
            </div>

            <Skeleton className="w-full h-8.5 rounded-full sm:mt-5 mt-3.5" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCardSkeleton;
