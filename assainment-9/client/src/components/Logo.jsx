import { cn } from '@/lib/utils';
import { SiWikibooks } from 'react-icons/si';

const Logo = ({ className, iconClass }) => {
  return (
    <div
      className={cn(
        'font-ring flex items-center gap-2 cursor-pointer select-none sm:text-2xl text-xl font-bold text-primary',
        className,
      )}
    >
      <span
        className={cn(
          'bg-primary text-white dark:text-black p-2 sm:text-lg text-sm rounded',
          iconClass,
        )}
      >
        <SiWikibooks />
      </span>
      MediQueue
    </div>
  );
};

export default Logo;
