import { cn } from '@/lib/utils';
import { Button } from '@heroui/react';

const ButtonBlack = ({
  children,
  className,
  type = 'button',
  buttonType = 'fill',
  ...props
}) => {
  return buttonType === 'fill' ? (
    <Button
      type={type}
      variant="secondary"
      className={cn(
        'font-poppins font-normal bg-black border-2 border-zinc-600 text-white shadow-xl px-5 py-5 hover:scale-102',
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  ) : (
    <Button
      type={type}
      variant="secondary"
      className={cn(
        'font-poppins bg-white text-black font-medium border border-zinc-300 px-5 py-5 hover:scale-102',
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonBlack;
