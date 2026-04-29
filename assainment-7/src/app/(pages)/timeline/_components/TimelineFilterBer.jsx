'use client';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter, useSearchParams } from 'next/navigation';

const filterOptions = ['all', 'call', 'text', 'video'];
const sortOptions = ['newest', 'oldest'];

const TimelineFilterBer = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // filtering
  const handleSelect = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'all') {
      params.delete('filter');
      return router.push(`/timeline?${params.toString()}`);
    }
    params.set('filter', value);
    router.push(`/timeline?${params.toString()}`);
  };

  // sorting
  const handleSort = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set('sort', value.toLowerCase());
    else params.delete('sort');
    router.push(`/timeline?${params.toString()}`);
  };

  // searching
  const handleSearch = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set('search', value.toLowerCase());
    else params.delete('search');
    router.push(`/timeline?${params.toString()}`);
  };

  return (
    <div className="flex sm:flex-row flex-col items-center sm:gap-5 gap-2 justify-between font-poppins">
      {/* filter */}
      <Select onValueChange={(value) => handleSelect(value)}>
        <SelectTrigger className="w-full sm:max-w-65 rounded-sm py-5 capitalize">
          <SelectValue placeholder="Filer Timeline" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filterOptions.map((item, index) => (
              <SelectItem
                key={index}
                value={item}
                className={'capitalize font-poppins'}
              >
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* sort and search */}
      <div className="w-full flex items-center justify-end sm:gap-5 gap-2">
        {/* sort */}
        <Select onValueChange={(value) => handleSort(value)}>
          <SelectTrigger className="rounded-sm py-5 capitalize">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {sortOptions.map((item, index) => (
                <SelectItem
                  key={index}
                  value={item}
                  className={'capitalize font-poppins'}
                >
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* search */}
        <Input
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search"
          className="sm:w-65 sm:max-w-65 py-5 rounded-sm"
        />
      </div>
    </div>
  );
};

export default TimelineFilterBer;
