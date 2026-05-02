import ButtonBlack from '@/components/Button';
import { fetchBooks } from '@/services/apis/fetchBooks';
import { Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { MdArrowBackIos } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { cn } from '@/lib/utils';

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  const books = await fetchBooks();
  const book = books.find((b) => String(b.id) === String(id));

  if (!book) return notFound();
  const isAvailable = book.available_quantity > 0;

  const fakeInfo = [
    { title: 'Published', subtitle: '2020' },
    { title: 'Pages', subtitle: '304' },
    { title: 'Language', subtitle: 'English' },
    { title: 'ISBN', subtitle: '978-0525559474' },
  ];

  console.log(book);

  return (
    <section className="w-full sm:mt-20 mt-10 p-5">
      <div className="w-full max-w-[1500px] mx-auto flex flex-col gap-5">
        <Link
          href="/books"
          className="flex items-center gap-1 font-poppins font-medium text-zinc-500 hover:text-black duration-200 sm:text-md text-sm"
        >
          <MdArrowBackIos />
          Back to books
        </Link>

        <div className="w-full flex sm:flex-row flex-col items-start lg:gap-10 gap-5">
          {/* left */}
          <div className="bg-white relative shadow-sm rounded-2xl overflow-hidden aspect-[1.8/2] w-full lg:max-w-130 md:max-w-110 md:min-w-90">
            <Image
              src={book.image_url}
              alt={book.title}
              width={1000}
              height={1000}
              quality={100}
              className="w-full h-full object-cover"
            />

            <span
              className={cn(
                'absolute top-3 right-3 px-3 py-0.5 font-poppins text-sm font-medium rounded-full',
                isAvailable
                  ? 'bg-[#EAF3DE] text-green-700'
                  : 'bg-[#fff1c1de] text-yellow-700',
              )}
            >
              {isAvailable ? 'Available' : 'Out of stock'}
            </span>
          </div>

          {/* right */}
          <div className="col-span-2 flex flex-col items-start gap-7 sm:p-5">
            <span className="font-poppins text-sm text-zinc-500 border border-zinc-200 px-4 py-0.5 rounded-full">
              {book.category}
            </span>
            <span>
              <h2 className="font-viga lg:text-4xl md:text-3xl text-2xl font-medium ">
                {book.title}
              </h2>
              <p className="font-poppins font-semibold lg:text-xl md:text-lg text-zinc-500">
                {book.author}
              </p>
            </span>
            <Separator />

            <p className="font-poppins lg:text-lg text-md font-medium text-sm text-zinc-500 w-[90%]">
              {book.description}
            </p>

            <Separator />

            <div className="w-full grid grid-cols-2 gap-3">
              {fakeInfo.map((item, index) => (
                <span
                  key={index}
                  className="flex flex-col gap-1 bg-gray-100 border border-gray-200 p-4 rounded-xl"
                >
                  <p className="uppercase font-poppins font-medium lg:text-sm text-xs text-zinc-400">
                    {item.title}
                  </p>
                  <p className="lg:text-xl text-md font-bold font-poppins text-zinc-600">
                    {item.subtitle}
                  </p>
                </span>
              ))}
            </div>

            {isAvailable ? (
              <span className="flex items-center gap-2">
                <span className="lg:size-3 size-2.5 rounded-full bg-green-500" />
                <p className="capitalize text-sm font-semibold font-poppinss">
                  {book.available_quantity} copies{' '}
                  <span className="text-zinc-500">available to borrow</span>
                </p>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <span className="lg:size-3 size-2.5 rounded-full bg-yellow-400" />
                <p className="capitalize text-sm text-zinc-500 font-semibold font-poppinss">
                  Not available at the moment
                </p>
              </span>
            )}

            <div className="mt-2 w-full flex items-center sm:gap-7 gap-3 justify-between">
              <ButtonBlack className={cn("rounded-xl w-full hover:scale-100",
                !isAvailable && 'opacity-50 pointer-events-none'
              )}>
                Borrow This Book
              </ButtonBlack>
              <span className="flex items-center gap-3">
                <button className="p-2.5 bg-white hover:bg-black hover:text-white duration-300 shadow-sm rounded-lg text-zinc-500">
                  <MdOutlineBookmarkAdd size={20} />
                </button>
                <button className="p-2.5 bg-white hover:bg-black hover:text-white duration-300 shadow-sm rounded-lg text-zinc-500">
                  <FaRegHeart size={20} />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsPage;
