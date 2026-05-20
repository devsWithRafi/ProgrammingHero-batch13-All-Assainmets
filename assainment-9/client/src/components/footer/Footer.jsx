import Logo from '../Logo';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import Link from 'next/link';
import {
  FaAt,
  FaInstagram,
  FaPhoneSquareAlt,
  FaRegCalendarPlus,
  FaRegFileAlt,
} from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { IoMdBook, IoMdStarOutline } from 'react-icons/io';
import { MdInfoOutline, MdOutlinePersonAddAlt } from 'react-icons/md';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { BiCheckShield, BiSupport } from 'react-icons/bi';
import { SiMinutemailer } from 'react-icons/si';
import { GrLocation } from 'react-icons/gr';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

const socials = [
  { icon: FaXTwitter, link: '/' },
  { icon: FaInstagram, link: '/' },
  { icon: FaFacebookF, link: '/' },
  { icon: FaLinkedinIn, link: '/' },
];

const footersLinks = {
  Learning: [
    { name: 'Browse tutors', link: '/tutors', icon: <IoMdBook size={17} /> },
    {
      name: 'Book a session',
      link: '/tutors',
      icon: <FaRegCalendarPlus size={15} />,
    },
    {
      name: 'Become a tutor',
      link: '/add-tutor',
      icon: <MdOutlinePersonAddAlt size={17} />,
    },
    {
      name: 'My sessions',
      link: '/my-sessions',
      icon: <LiaClipboardListSolid size={17} />,
    },
    {
      name: 'Top rated tutors',
      link: '/tutors',
      icon: <IoMdStarOutline size={20} />,
    },
  ],
  Company: [
    { name: 'About us', link: '/', icon: <MdInfoOutline size={18} /> },
    { name: 'Support', link: '/', icon: <BiSupport size={16} /> },
    { name: 'Privacy policy', link: '/', icon: <BiCheckShield size={19} /> },
    { name: 'Terms of service', link: '/', icon: <FaRegFileAlt size={15} /> },
    { name: 'Contact us', link: '/', icon: <SiMinutemailer size={16} /> },
  ],
};

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] w-full overflow-hidden sm:py-15 py-10">
      <div className="px-5 w-full max-w-[1500px] mx-auto grid md:grid-cols-4 grid-cols-2 sm:gap-5 gap-10 sm:mt-5">
        <div className="flex items-start flex-col gap-5 sm:col-span-1 col-span-2">
          <Link href={'/'}>
            <Logo className={'text-white'} iconClass={'bg-white text-black'} />
          </Link>
          <span className="bg-orange-200/10 py-1 px-2.5 text-orange-200 text-xs rounded-full inline-flex items-center gap-1">
            <IoCheckmarkCircleOutline size={14} />
            Trusted learning platform
          </span>
          <p className="w-[90%] text-zinc-400 text-sm font-medium">
            Dhaka's leading platform for academic excellence, connecting
            students with the city's finest educators.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((social, index) => (
              <Link
                href={social.link}
                key={index}
                className="text-zinc-500 hover:text-zinc-400 p-2 aspect-square rounded-md border border-white/10 hover:border-white/20"
              >
                <social.icon size={18} />
              </Link>
            ))}
          </div>
        </div>

        {Object.entries(footersLinks).map(([key, value], index) => (
          <div key={index} className="flex flex-col gap-3">
            <h4 className="text-white font-semibold mb-3 text-md">{key}</h4>
            {value.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="text-zinc-400 hover:text-zinc-300 text-sm hover:underline flex items-center gap-2"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        ))}

        <div className="flex flex-col gap-3 text-zinc-400 sm:col-span-1 col-span-2">
          <h4 className="text-white font-semibold mb-3 text-md">
            Stay in touch
          </h4>
          <span className="text-sm flex items-center gap-2">
            <GrLocation size={17} /> Chittagong, Bangladesh
          </span>
          <span className="text-sm flex items-center gap-2">
            <FaPhoneSquareAlt size={17} />
            +880 123 456 789
          </span>
          <span className="text-sm flex items-center gap-2">
            <FaAt size={17} />
            support@mediqueue.com
          </span>
          <div>
            <Input
              placeholder="Your email address"
              className={'border-white/20 rounded-sm h-auto py-2 px-3.5'}
            />
            <Button
              className={
                'w-full mt-2 bg-white text-black rounded-sm h-auto py-2 px-3.5'
              }
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <Separator className={'bg-white/10 my-7'} />

      <div className="px-5 w-full max-w-[1500px] mx-auto text-zinc-500 text-sm font-medium flex items-center gap-3 justify-between sm:flex-row flex-col">
        <p>© {currentDate} MediQueue. All rights reserved.</p>
        <span className="flex items-center gap-5">
          <Link href={'/'} className="hover:underline hover:text-zinc-300">
            Cookie Policy
          </Link>
          <Link href={'/'} className="hover:underline hover:text-zinc-300">
            Security
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
