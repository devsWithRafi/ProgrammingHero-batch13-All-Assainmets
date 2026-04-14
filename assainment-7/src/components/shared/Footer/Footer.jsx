import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const socialLinks = [
    { icon: assets.instagramPng, link: 'instagram.com' },
    { icon: assets.facebookPng, link: 'facebook.com' },
    { icon: assets.twitterPng, link: 'x.com' },
];

const Footer = () => {
      const currentDate = new Date();

    return (
        <footer className="w-full bg-deepGreen text-white px-4 font-poppins">
            <div className='w-full max-w-[1500px] mx-auto'>
                {/* FOOTER TOP */}
                <div className="flex flex-col items-center justify-center gap-5 text-center py-10 mt-5">
                    <Image
                        src={assets.logoXlPng}
                        alt="footer-logo"
                        width={412}
                        height={61}
                        className='sm:w-[412px] w-[250px]'
                    />
                    <p className="text-gray-300 sm:text-lg text-sm w-[90%]">
                        Your personal shelf of meaningful connections. Browse,
                        tend, and nurture the relationships that matter most.
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <h2 className="sm:text-2xl text-xl font-medium">Social Links</h2>
                        <div className="w-full flex items-center justify-center gap-3">
                            {socialLinks.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link}
                                    className="hover:scale-105 duration-300 shadow-md rounded-full"
                                >
                                    <Image
                                        src={item.icon}
                                        alt="social-icon"
                                        width={40}
                                        height={40}
                                        className="sm:size-10 size-8"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FOOTER BOTTOM */}
                <div className="text-sm text-gray-400 py-10 flex sm:flex-row flex-col items-center justify-between gap-5 border-t border-white/10">
                    {/* left */}
                    <p>© {currentDate.getFullYear()} KeenKeeper. All rights reserved.</p>

                    {/* right */}
                    <span className="flex items-center gap-3">
                        <Link href="/" className='hover:text-white duration-200 hover:underline'>Privacy Policy</Link>
                        <Link href="/" className='hover:text-white duration-200 hover:underline'>Terms of Service </Link>
                        <Link href="/" className='hover:text-white duration-200 hover:underline'>Cookies</Link>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
