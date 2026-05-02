import { assets } from '@/assets/assets';
import BooksCard from '@/components/books/BooksCard';
import ButtonBlack from '@/components/Button';
import { auth } from '@/lib/auth';
import { formateDate } from '@/lib/formateDate';
import { fetchBooks } from '@/services/apis/fetchBooks';
import { Separator } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineSettings } from 'react-icons/md';

export const dynamic = 'force-dynamic';

const ProfilePage = async () => {
  const books = await fetchBooks();

  const { user } = await auth.api.getSession({
    headers: await headers(),
  });
  const userJoinedDate = formateDate(user?.createdAt);

  return (
    <section className="w-full p-3">
      {/* profile header */}
      <div className="p-7 mt-20 bg-white rounded-2xl shadow-sm  w-full max-w-[1300px] mx-auto">
        <div className="flex sm:flex-row flex-col sm:items-start items-center gap-5">
          <div className="bg-gray-300 border-4 overflow-hidden aspect-square sm:w-50 w-30 rounded-4xl">
            <Image
              src={user?.image ?? assets.defaultAvatar}
              alt="profile"
              width={500}
              height={500}
              quality={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-2 flex flex-col sm:items-start items-center gap-2">
            <p className="font-poppins sm:text-xs text-[10px] text-zinc-600 bg-zinc-100 px-3 py-1 rounded-full">
              Joined: {userJoinedDate}
            </p>
            <h2 className="font-bold font-poppins sm:text-left text-center sm:text-4xl text-2xl capitalize">
              {user?.name}
            </h2>
            <p className="font-poppins text-zinc-500 sm:text-left text-center font-medium sm:text-md text-sm">
              {user?.email}
            </p>

            <Link
              href="/profile/setting"
              className="!px-10 mt-2 !rounded-xl btn-black flex items-center gap-2"
            >
              <MdOutlineSettings />
              Edit Profile
            </Link>
          </div>
        </div>
      </div>

      {/* profile content */}
      <div className="w-full max-w-[1300px] mx-auto">
        <h2 className="font-bold font-ring text-3xl mt-10">Borrowed Books</h2>
        <Separator className="my-4" />
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-3">
          {books.slice(0, 3).map((book) => (
            <BooksCard key={book.id} book={book} />
          ))}
        </div>
        <h2 className="font-bold font-ring text-3xl mt-10">My Favorites</h2>
        <Separator className="my-4" />
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
          {books.slice(0, 4).map((book) => (
            <BooksCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
