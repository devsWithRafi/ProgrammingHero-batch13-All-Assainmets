import { cn } from '../lib/cn';

const GradientButton = ({ children, className, type = 'fill', ...props }) => {
    return type === 'fill' ? (
        <button
            className={cn(
                'btn border-none bg-gradient px-7 py-3 shadow-[#4F39F6] hover:shadow-2xl/50 duration-300 font-medium sm:text-[16px] text-sm h-auto rounded-full text-white',
                className,
            )}
            {...props}
        >
            {children}
        </button>
    ) : (
        <button
            className={cn(
                'btn border-none relative bg-gradient p-[1px] shadow-none hover:shadow-[#4F39F6] hover:shadow-2xl/30 duration-300 sm:text-[16px] text-sm h-auto rounded-full text-white',
                className,
            )}
            {...props}
        >
            <span className="w-full h-full px-7 py-3 bg-white rounded-full font-medium">
                <span className="bg-gradient flex items-center justify-center gap-2 bg-clip-text text-transparent text-center">
                    {children}
                </span>
            </span>
        </button>
    );
};

export default GradientButton;
