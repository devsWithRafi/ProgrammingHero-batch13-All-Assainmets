'use client';

import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';

const Category = ({ categories }) => {
  const searchParams = useSearchParams();
  const query = searchParams.get('category') || 'all';
  const router = useRouter();

  const handleClick = (category) => {
    const params = new URLSearchParams(searchParams);
    if (category === 'all') params.delete('category');
    else params.set('category', category);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col items-start capitalize">
      {['all', ...categories].map((category, index) => (
        <button
          key={index}
          onClick={() => handleClick(category)}
          className={cn(
            'text-sm font-poppins w-full text-left capitalize text-zinc-500 hover:text-zinc-700 font-medium px-3 py-2 rounded',
            query === category && 'bg-gray-50 text-black hover:text-black',
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Category;
