import Image from 'next/image';
import React from 'react';
import ButtonBlack from '../Button';

const BlogCard = ({ blog }) => {
  return (
    <div
      className="w-full h-full group shrink-0 flex rounded-xl overflow-hidden bg-white shadow-sm"
    >
      <div className='sm:min-w-[270px] sm:max-w-[270px] min-w-[200px] max-w-[200px] aspect-square overflow-hidden'>
        <Image
          src={blog.image}
          alt={blog.title}
          width={500}
          height={500}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>

      <div className="bg-white rounded-xl p-5 -ml-8 z-1">
        <span className="font-poppins text-sm font-medium">{blog.date}</span>
        <h2 className="font-viga font-semibold sm:text-xl text-md sm:mt-15 mt-5">{blog.title}</h2>
        <p className="sm:text-sm text-xs font-poppins text-zinc-500 mt-3">
          {blog.description.slice(0, 100)} ...
        </p>

        <div className="flex items-center gap-3 mt-5">
          <Image
            src={blog.author.image}
            alt={blog.author.name}
            width={32}
            height={32}
            className="sm:size-7 size-6 rounded-full object-cover"
          />
          <span className="text-sm font-semibold">
            {blog.author.name}
          </span>
        </div>

        <span className="flex w-full sm:mt-5 mt-3">
          <ButtonBlack type="outline" className="w-full sm:py-4 !py-2 sm:text-sm text-xs">
            Read More
          </ButtonBlack>
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
