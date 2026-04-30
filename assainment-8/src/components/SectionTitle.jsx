const SectionTitle = ({ title, description, eliment }) => {
  return (
    <div className="">
      <h2 className="font-bold font-ring text-5xl">{title}</h2>
      <div className="flex items-center justify-between gap-5">
        <p className="text-zinc-500 font-poppins text-md font-medium">
          {description}
        </p>
        {eliment}
      </div>
    </div>
  );
};

export default SectionTitle;
