'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const FilterHeader = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const defaultSearchValue = {
    tutorsName: '',
    startDate: undefined,
    endDate: undefined,
  };
  const [query, setQuery] = useState(defaultSearchValue);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    Object.entries(query).forEach(([key, value]) => {
      if (value) params.set(key, value);
      else params.delete(key);
    });
    router.push(`${pathname}?${params.toString()}`);
  }, [query]);

  const handleResetFilter = () => {
    setQuery(defaultSearchValue);
    router.push(`${pathname}`);
  };

  return (
    <div className="w-full p-5 border rounded-xl grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-end justify-between gap-5">
      <div className="flex flex-col gap-1 md:col-span-2 sm:col-span-3 col-span-2">
        <Label>Tutor Name</Label>
        <Input
          value={query.tutorsName}
          placeholder="Search by Tutor Name"
          className="rounded-sm text-sm h-10"
          onChange={(e) =>
            setQuery({ ...query, tutorsName: e.target.value.toLowerCase() })
          }
        />
      </div>

      {/* start date */}
      <div className="flex flex-col gap-1">
        <Label>Start Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                'w-full justify-between text-left font-normal rounded-sm h-10',
                !query.startDate && 'text-muted-foreground',
              )}
            >
              {query.startDate
                ? format(query.startDate, 'MM/dd/yyyy')
                : 'mm/dd/yyyy'}

              <CalendarIcon className="h-4 w-4 opacity-70" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={query.startDate}
              onSelect={(date) => setQuery({ ...query, startDate: new Date(date) })}
              disabled={(date) => date < new Date()}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* end date */}
      <div className="flex flex-col gap-1">
        <Label>End Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                'w-full justify-between text-left font-normal rounded-sm h-10',
                !query.endDate && 'text-muted-foreground',
              )}
            >
              {query.endDate
                ? format(query.endDate, 'MM/dd/yyyy')
                : 'mm/dd/yyyy'}

              <CalendarIcon className="h-4 w-4 opacity-70" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={query.endDate}
              onSelect={(date) => setQuery({ ...query, endDate: new Date(date) })}
              disabled={(date) => date < new Date()}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <Button onClick={handleResetFilter} className="h-10 rounded-sm col-span-2 sm:col-span-1">
        Reset
      </Button>
    </div>
  );
};

export default FilterHeader;
