const GradientText = ({ children, size, ...props }) => {
    return (
        <p
            className={`bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ${size}`}
            {...props}
        >
            {children}
        </p>
    );
};

export default GradientText;
