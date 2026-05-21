'use clinet';
import { motion } from 'motion/react';

const BookASessionCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: 'easeOut',
      }}
      viewport={{ once: true }}
      key={index}
      className="flex flex-col gap-3 items-center bg-card border rounded-xl p-10"
    >
      <span className="text-muted-foreground rounded-full aspect-square w-15 flex items-center justify-center bg-muted relative">
        <item.icon size={35} />
        <span className="bg-primary text-primary-foreground aspect-square w-7 h-7 font-medium flex items-center justify-center rounded-full absolute -top-2 -right-2">
          {index + 1}
        </span>
      </span>
      <h2 className="font-semibold text-xl text-center">{item.title}</h2>
      <p className="text-muted-foreground text-sm text-center">
        {item.description}
      </p>
    </motion.div>
  );
};

export default BookASessionCard;
