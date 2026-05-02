'use client';

import { fetchBooks } from '@/services/apis/fetchBooks';
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { PiStarFourFill } from 'react-icons/pi';


const HeroMarquee = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchBooks();
      setBooks(data);
    };
    loadData();
  }, []);

  return (
    <div className="w-full bg-black text-zinc-300 font-poppins py-4 overflow-hidden">
      <Marquee pauseOnHover speed={50} className="w-full">
        {[...books, ...books].map((book, index) => (
          <span key={index} className="flex items-center uppercase">
            <span>
              New Arrivals: {book.title} - Special Discount on Memberships
            </span>
            <PiStarFourFill className="shrink-0 mx-20" />
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default HeroMarquee;
