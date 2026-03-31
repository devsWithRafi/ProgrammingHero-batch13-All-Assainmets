import { cn } from '../lib/cn';

const Loader = ({ className }) => {
    return (
        <div
            className={cn(
                'w-full max-w-[1500px] mx-auto p-5 flex items-center justify-center',
                className,
            )}
        >
            <span className="loading loading-ring loading-xl scale-150"></span>
        </div>
    );
};

export default Loader;
