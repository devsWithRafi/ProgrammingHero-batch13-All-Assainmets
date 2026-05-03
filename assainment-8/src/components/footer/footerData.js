import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoInstagram } from 'react-icons/io5';
import { IoLogoFacebook } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa6';

export const socials = [
  { icon: FaXTwitter, link: '/' },
  { icon: IoLogoInstagram, link: '/' },
  { icon: IoLogoFacebook, link: '/' },
  { icon: FaLinkedin, link: '/' },
];

export const footerData = {
  explore: [
    { name: 'Home', link: '/' },
    { name: 'All books', link: '/books' },
    { name: 'Reading lists', link: '/' },
    { name: 'Blog', link: '/' },
  ],
  account: [
    { name: 'My profile', link: '/profile' },
    { name: 'Borrowed books', link: '/profile' },
    { name: 'Favourites', link: '/profile' },
    { name: 'Settings', link: '/profile/setting' },
  ],
};
