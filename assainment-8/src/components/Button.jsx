import { cn } from '@/lib/utils';
import { Button } from '@heroui/react';

const ButtonBlack = ({ children, className, type = 'fill', ...props }) => {
  return type === 'fill' ? (
    <Button
      variant="secondary"
      className={cn(
        'font-poppins font-normal bg-black border-2 border-zinc-600 text-white shadow-xl px-5 py-5',
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  ) : (
    <Button
      variant="secondary"
      className={cn(
        'font-poppins font-normal bg-transparent text-black border border-zinc-300 px-5 py-5',
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonBlack;
