'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';

const BookSearchber = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const onChange = (e) => {
    const { value } = e.target;
    const params = new URLSearchParams(searchParams);
    if (value) params.set('title', value.toLowerCase());
    else params.delete('title');
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="w-170 bg-white px-4 rounded-lg shadow-sm mx-auto flex items-center gap-2">
      <FiSearch size={20} className="text-zinc-400" />
      <input
        placeholder="Search by title"
        onChange={onChange}
        className="border-none outline-none py-4 font-poppins text-sm w-full"
      />
    </div>
  );
};

export default BookSearchber;
