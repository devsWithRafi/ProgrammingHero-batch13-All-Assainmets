'use client';

import BlogCard from '@/components/blog/BlogCard';
import { fetchBlogs } from '@/services/apis/fetchBlogs';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BlogNav from '@/components/blog/BlogNav';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchBlogs();
      setBlogs(data);
    };
    loadData();
  }, []);

  return (
    <>
      <BlogNav swiperRef={swiperRef} />

      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        onSwiper={(swiper) => setSwiperRef(swiper)}
        className="mt-10 py-5"
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id} className='!min-w-[600px]'>
            <BlogCard blog={blog} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BlogList;
