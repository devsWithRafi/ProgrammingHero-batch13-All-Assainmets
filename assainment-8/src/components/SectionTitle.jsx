const SectionTitle = ({ title, description, eliment }) => {
  return (
    <div className="">
      <h2 className="font-bold font-ring sm:text-5xl text-3xl">{title}</h2>
      {description && (
        <div className="flex sm:flex-row flex-col sm:items-center items-start justify-between sm:gap-5 gap-3 sm:mt-0 mt-2">
          <p className="text-zinc-500 font-poppins sm:text-md text-sm font-medium">
            {description}
          </p>
          {eliment}
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
