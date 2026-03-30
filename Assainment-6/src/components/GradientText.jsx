const GradientText = ({ children, size, ...props }) => {
    return (
        <p
            className={`bg-gradient bg-clip-text text-transparent ${size}`}
            {...props}
        >
            {children}
        </p>
    );
};

export default GradientText;
