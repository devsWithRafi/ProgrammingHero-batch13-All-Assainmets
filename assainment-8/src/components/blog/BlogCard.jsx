import Image from 'next/image';
import React from 'react';
import ButtonBlack from '../Button';

const BlogCard = ({ blog }) => {
  return (
    <div
      key={blog.id}
      className="w-full h-full group shrink-0 flex rounded-2xl overflow-hidden bg-white shadow-sm"
    >
      <div className='min-w-[270px] max-w-[220px] aspect-square overflow-hidden'>
        <Image
          src={blog.image}
          alt={blog.title}
          width={500}
          height={500}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>

      <div className="bg-white rounded-2xl p-5 -ml-8 z-1">
        <span className="font-poppins text-sm font-medium">{blog.date}</span>
        <h2 className="font-viga font-semibold text-xl mt-15">{blog.title}</h2>
        <p className="text-sm font-poppins text-zinc-500 mt-3">
          {blog.description.slice(0, 115)} ...
        </p>

        <div className="flex items-center gap-3 mt-5">
          <Image
            src={blog.author.image}
            alt={blog.author.name}
            width={32}
            height={32}
            className="size-7 rounded-full object-cover"
          />
          <span className="text-sm font-semibold">
            {blog.author.name}
          </span>
        </div>

        <span className="flex w-full mt-5">
          <ButtonBlack type="outline" className="w-full py-4">
            Read More
          </ButtonBlack>
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
