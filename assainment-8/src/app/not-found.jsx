import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';

export const metadata = { title: 'Atheneum | Page Not Found' };

const NotFoundPage = () => {
  return (
    <section className="w-screen h-screen flex flex-col gap-3 items-center justify-center">
      <h1 className="font-bold sm:text-9xl text-7xl font-ring">404</h1>
      <h3 className="font-semibold font-viga sm:text-3xl text-xl text-center">
        Page Not Found.
      </h3>
      <p className="text-sm text-gray-700 font-medium font-poppins mt-2 text-center sm:max-w-[500px] w-[90%]">
        The page you're looking for doesn't exist or has been removed. But dont
        worry - we're here to guide you back.
      </p>
      <Link
        href="/"
        className="sm:text-md text-sm px-10 shadow-sm py-3 font-poppins hover:bg-black/90 duration-200 mt-3 flex items-center gap-2 bg-black text-white"
      >
        <IoMdArrowBack size={20} />
        Back To Home
      </Link>
    </section>
  );
};

export default NotFoundPage;
