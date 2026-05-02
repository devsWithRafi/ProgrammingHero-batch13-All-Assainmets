import { assets } from '@/assets/assets';
import Link from 'next/link';
import { MdAlternateEmail } from 'react-icons/md';
import { footerData, socials } from './footerData';
import { FaSquarePhone } from "react-icons/fa6";
import { Separator } from '@heroui/react';


const Footer = () => {
  const currentnYear = new Date().getFullYear();

  return (
    <footer className="w-full flex flex-col pt-10 relative">
      <div className="w-full flex flex-col">
        {/* FOOTER TOP-START */}
        <div
          className="w-[95%] max-w-[1500px] mx-auto h-[300px] shadow-xl rounded-xl overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${assets.footerMapBenner.src})` }}
        >
          <div className="w-full h-full bg-black/70 backdrop-blur-xs flex flex-col sm:justify-end justify-center">
            <div className="w-full p-8 flex flex-col gap-5">
              <h2 className="font-ring text-gray-200 font-medium md:text-5xl text-4xl sm:text-left text-center">
                Ready to read with purpose?
              </h2>
              <span className="flex sm:flex-row flex-col items-center justify-between gap-5">
                <p className="sm:max-w-1/2 w-[80%] sm:text-left text-center sm:text-sm text-xs text-zinc-500 font-poppins font-medium">
                  Access our essential collection of summaries and mental
                  morels. Quality over quantity, always.
                </p>
                <span className="sm:w-1/2 w-[90%] relative flex items-center p-1 h-12 bg-white/10 border border-white/5 rounded-full gap-2">
                  <span className="pl-3 flex items-center w-full h-full gap-2">
                    <MdAlternateEmail size={22} className="text-zinc-400" />
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="w-full h-full text-zinc-400 border-none outline-none"
                    />
                  </span>
                  <button className="font-poppins px-5 h-full rounded-full bg-white">
                    Subscribe
                  </button>
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* FOOTER TOP-END */}
        <div className="w-full bg-[#1A1814] mt-[-150px] pt-[200px] text-[#8A8679] mx-auto py-8 md:px-8 px-5 flex flex-col gap-6">
          <div className="w-full max-w-[1500px] mx-auto grid md:grid-cols-4 grid-cols-2 gap-5">
            <div className="flex flex-col sm:col-span-1 col-span-2 gap-3 w-full">
              <h2 className="font-ring font-bold sm:text-4xl text-3xl text-white">
                Atheneum
              </h2>
              <p className="text-sm w-[90%] font-poppins font-medium">
                A curated digital library for readers who take their books
                seriously. Discover, borrow, and explore.
              </p>
              <div className="flex items-center gap-3 mt-5">
                {socials.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    className="p-2 hover:border-white/20 hover:text-white duration-300 ease-in-out rounded-lg border border-white/5"
                  >
                    <item.icon size={18} />
                  </Link>
                ))}
              </div>
            </div>

            {Object.entries(footerData).map(([key, value], index) => (
              <div key={index} className='font-poppins flex flex-col items-start gap-3'>
                <h4 className='uppercase text-gray-200 font-semibold sm:text-lg text-sm'>{key.toUpperCase()}</h4>
                {value.map((item, i) => (
                  <Link href={item.link} key={i} 
                    className='hover:text-gray-200 duration-300 sm:text-sm text-xs'>
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}

            <div className='sm:col-span-1 col-span-2 font-poppins flex flex-col items-start gap-3 overflow-hidden'>
              <h4 className='uppercase text-gray-200 font-semibold sm:text-lg text-sm'>Contact</h4>
              <span className='flex items-center gap-2 hover:text-gray-200 duration-300 sm:text-sm text-xs'>
                <FaSquarePhone/> +123 456 789
              </span>
              <span className='flex items-center gap-2 hover:text-gray-200 duration-300 text-sm'>
                <MdAlternateEmail/> support@atheneum.com
              </span>
            </div>
          </div>
          
          <Separator className='bg-white/5'/>

          {/* FOOTER BOTTOM */}
          <div className="w-full max-w-[1500px] mx-auto text-[#8A8679] flex sm:flex-row flex-col items-center gap-5 justify-between">
            <p className='font-poppins text-xs sm:text-start text-center'>
              Copyright &copy; {currentnYear} Atheneum, All Rights Reserved.
            </p>
            <div className="flex items-center gap-5 font-poppins text-xs">
              <Link href="/" className='hover:text-white hover:underline duration-200'>Terms & Conditions</Link>
              <Link href="/books" className='hover:text-white hover:underline duration-200'>Privacy Policy</Link>
              <Link href="/profile" className='hover:text-white hover:underline duration-200'>Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
