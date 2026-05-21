import { cn } from '@/lib/utils';
import { LuLoaderPinwheel } from 'react-icons/lu';

const DataLoader = ({ className }) => {
  return (
    <div
      className={cn('flex items-center justify-center h-100 w-full', className)}
    >
      <LuLoaderPinwheel className="text-muted-foreground animate-spin size-8" />
    </div>
  );
};

export default DataLoader;
