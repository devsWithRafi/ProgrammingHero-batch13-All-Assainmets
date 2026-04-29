import Link from 'next/link';
import { RiHome3Line } from 'react-icons/ri';

export const metadata = {
  title: 'KeenKeeper | 404 - Page not found',
  description: 'KeenKeeper',
};

const NotFound = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-deepGreen font-bold sm:text-[150px] text-[100px]">
        404
      </h1>
      <h3 className="font-bold text-3xl sm:-mt-10 -mt-5">Page Not Found</h3>
      <p className="text-sm text-gray-400 mt-5 text-center">
        Looks like this friendship link is broken. The page <br /> your looking
        for doesnt exist or has been removed.
      </p>
      <Link
        href={'/'}
        className="px-5 py-3 mt-5 flex items-center gap-2 rounded-sm bg-deepGreen text-white"
      >
        <RiHome3Line size={20} />
        Back To Home
      </Link>
    </section>
  );
};

export default NotFound;
