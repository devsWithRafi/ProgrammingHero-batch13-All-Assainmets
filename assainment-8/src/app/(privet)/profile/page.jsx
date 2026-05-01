import BooksCard from '@/components/books/BooksCard';
import ButtonBlack from '@/components/Button';
import { fetchBooks } from '@/services/apis/fetchBooks';
import { Separator } from '@heroui/react';
import { URLPattern } from 'next/dist/server/web/exports';
import Link from 'next/link';
import { MdOutlineSettings } from 'react-icons/md';

const ProfilePage = async () => {
  const books = await fetchBooks();

  return (
    <section className="w-full p-3">
      {/* profile header */}
      <div className="p-7 mt-20 bg-white rounded-2xl shadow-sm  w-full max-w-[1300px] mx-auto">
        <div className="flex items-start gap-5">
          <div className="bg-gray-300 border-4 aspect-square w-50 rounded-4xl"></div>
          <div className="p-2 flex flex-col items-start gap-2">
            <p className="font-poppins text-xs text-zinc-600 bg-zinc-100 px-3 py-1 rounded-full">
              Joined: Sept 2023
            </p>
            <h2 className="font-bold font-poppins text-4xl capitalize">
              Julian Thorne
            </h2>
            <p className="font-poppins text-zinc-500 font-medium text-md">
              julian.thorne@atheneum.edu
            </p>

            <Link href={'/profile/setting'}>
              <ButtonBlack className="px-10 py-4.5 rounded-xl">
                <MdOutlineSettings />
                Edit Profile
              </ButtonBlack>
            </Link>
          </div>
        </div>
      </div>

      {/* profile content */}
      <div className="w-full max-w-[1300px] mx-auto">
        <h2 className="font-bold font-ring text-3xl mt-10">Borrowed Books</h2>
        <Separator className="my-4" />
        <div className="grid grid-cols-3 gap-3">
          {books.slice(0, 3).map((book) => (
            <BooksCard key={book.id} book={book} />
          ))}
        </div>
        <h2 className="font-bold font-ring text-3xl mt-10">My Favorites</h2>
        <Separator className="my-4" />
        <div className="grid grid-cols-4 gap-3">
          {books.slice(0, 4).map((book) => (
            <BooksCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
