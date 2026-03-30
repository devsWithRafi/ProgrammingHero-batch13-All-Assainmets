const GradientButton = ({ children, type = 'fill', ...props }) => {
    return type === 'fill' ? (
        <button
            className="btn bg-gradient-to-r border-none from-[#4F39F6] to-[#9514FA] px-7 py-3 shadow-[#4F39F6] hover:shadow-2xl/50 duration-300 font-medium sm:text-[16px] text-sm h-auto rounded-full text-white"
            {...props}
        >
            {children}
        </button>
    ) : (
        <button
            className="btn border-none relative bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-[1px] shadow-[#4F39F6] hover:shadow-2xl/30 duration-300 sm:text-[16px] text-sm h-auto rounded-full text-white"
            {...props}
        >
            <span className="px-7 py-3 bg-white rounded-full font-medium">
                <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] flex items-center gap-2 bg-clip-text text-transparent">
                    {children}
                </span>
            </span>
        </button>
    );
};

export default GradientButton;
