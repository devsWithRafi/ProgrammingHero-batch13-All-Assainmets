'use client';

import BlogCard from '@/components/blog/BlogCard';
import { fetchBlogs } from '@/services/apis/fetchBlogs';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BlogNav from '@/components/blog/BlogNav';
import BlogCardSkeleton from '@/components/blog/BlogCardSkeleton';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);
  const [blogLoading, setBlogLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setBlogLoading(true);
        const data = await fetchBlogs(true);
        setBlogs(data);
        setBlogLoading(false);
      } catch (error) {
        setBlogLoading(false);
        console.error('Error fetching data:', error);
      } finally {
        setBlogLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <>
      <BlogNav swiperRef={swiperRef} />

      {blogLoading ? (
        <BlogCardSkeleton />
      ) : (
        <Swiper
          spaceBetween={15}
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
            <SwiperSlide
              key={blog.id}
              className="sm:!min-w-[600px] !min-w-[400px] p-1"
            >
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default BlogList;
