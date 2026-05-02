'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';
import { Label, ListBox, Select, Separator } from '@heroui/react';
import { useEffect, useState } from 'react';
import { fetchBooks } from '@/services/apis/fetchBooks';

const BookSearchber = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const books = await fetchBooks();
      const categories = [
        ...new Set(books.map((book) => book.category.toLowerCase())),
      ];
      setCategories(['all', ...categories]);
    };
    loadCategories();
  }, []);

  const onChange = (e) => {
    const { value } = e.target;
    const params = new URLSearchParams(searchParams);
    if (value) params.set('title', value.toLowerCase());
    else params.delete('title');
    router.push(`?${params.toString()}`);
  };

  const handleChange = (value) => {
    console.log(value)
    const params = new URLSearchParams(searchParams);
    if (value === 'all') params.delete('category');
    else params.set('category', value.toLowerCase());
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <div className="md:w-170 sm:w-150 w-full rounded-md border border-zinc-200 mx-auto flex items-center overflow-hidden sm:h-12 h-10">
        <Select
          onChange={handleChange}
          className="sm:hidden flex w-[150px] font-poppins bg-transparent rounded-none"
          placeholder={categories[0] || "Select one"}
        >
          <Select.Trigger className="rounded-none sm:text-md text-sm bg-transparent shadow-none h-full capitalize text-nowrap">
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover className="rounded-md sm:text-md text-sm font-poppins capitalize">
            <ListBox>
              {categories.map((cat, index) => (
                <ListBox.Item
                  className="rounded capitalize"
                  key={index}
                  id={cat}
                  textValue={cat}
                >
                  {cat}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>

        <Separator orientation="vertical" />

        <span className="w-full flex items-center gap-2 px-3">
          <FiSearch size={20} className="text-zinc-400" />
          <input
            placeholder="Search by title"
            onChange={onChange}
            className="border-none outline-none h-full font-poppins text-sm w-full"
          />
        </span>
      </div>
    </>
  );
};

export default BookSearchber;
