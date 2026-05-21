'use client';

import { FiSearch } from 'react-icons/fi';
import { LuCalendarClock } from 'react-icons/lu';
import { RiFlashlightLine } from 'react-icons/ri';
import BookASessionCard from '../BookASessionCard';
import { motion } from 'motion/react';

const dummyData = [
  {
    icon: FiSearch,
    title: 'Browse Tutors',
    description: 'Find tutors by name across our extensive network.',
  },
  {
    icon: LuCalendarClock,
    title: 'Pick a slot',
    description: 'Choose available time and date that works for your shedule.',
  },
  {
    icon: RiFlashlightLine,
    title: 'Get your token',
    description: 'Receive digital session token instantly upon booking',
  },
];

const BooksASession = () => {
  return (
    <section className="px-3 sm:py-30 py-20 w-full bg-muted">
      <div className="w-full max-w-[1500px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: 'easeOut',
          }}
          className="font-semibold font-ring sm:text-4xl text-2xl text-center"
        >
          Book a session in 3 easy steps
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: 'easeOut',
          }}
          className="text-muted-foreground text-sm text-center mt-2"
        >
          Three simple steps to connect with a mentor who understands your
          goals.
        </motion.p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-15">
          {dummyData.map((item, index) => (
            <BookASessionCard item={item} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksASession;
