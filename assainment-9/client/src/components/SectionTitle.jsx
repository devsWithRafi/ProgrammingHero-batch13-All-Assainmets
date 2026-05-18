const SectionTitle = ({ title, description, eliment }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-ring text-4xl text-primary font-semibold">{title}</h2>
      <span className="flex items-center justify-between gap-5">
        <p className="font-poppins font-medium text-sm text-muted-foreground">
          {description}
        </p>
        {eliment}
      </span>
    </div>
  );
};

export default SectionTitle;
