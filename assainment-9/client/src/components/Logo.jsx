import { SiWikibooks } from 'react-icons/si';

const Logo = () => {
  return (
    <div className="font-ring flex items-center gap-2 cursor-pointer select-none sm:text-2xl text-xl font-bold text-primary">
      <span className="bg-primary text-white dark:text-black p-2 sm:text-lg text-sm rounded">
        <SiWikibooks />
      </span>
      MediQueue
    </div>
  );
};

export default Logo;
