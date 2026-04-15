'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const ActiveNavLink = ({ href, children }) => {
    const path = usePathname();

    return (
        <Link
            href={href}
            className={cn(
                'flex items-center rounded gap-1 text-gray-500 text-sm font-medium px-3 py-1.5',
                href === path && 'text-white bg-[#244D3F]',
            )}
        >
            {children}
        </Link>
    );
};

export default ActiveNavLink;
