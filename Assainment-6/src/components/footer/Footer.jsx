import { assets } from '../../assets/assets';
import { footerItems } from './footerItems';
import { cn } from '../../lib/cn';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
    const currentDate = new Date();

    return (
        <footer className="w-full bg-[#101727] text-white">
            <div className="w-full max-w-[1500px] mx-auto px-5 flex flex-col gap-10">
                {/* FOOTER TOP */}
                <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5 py-20">
                    <div className="flex flex-col gap-5 sm:col-span-1 col-span-2">
                        <img
                            src={assets.footerLogo}
                            alt="footerLogo"
                            className="w-[180px]"
                        />
                        <p className="text-gray-400 text-[16px]">
                            Premium digital tools for creators, professionals,
                            and businesses. Work smarter with our suite of
                            powerful tools.
                        </p>
                    </div>

                    {/* footer items */}
                    {Object.entries(footerItems).map(([key, value]) => (
                        <ul
                            key={key}
                            className="capitalize flex flex-col gap-3"
                        >
                            {value.map((item, index) => (
                                <li
                                    key={index}
                                    className={cn(
                                        'text-gray-400 text-sm hover:text-gray-200 duration-300',
                                        index === 0 &&
                                            'text-xl font-semibold text-white mb-3 pointer-events-none',
                                    )}
                                >
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    ))}

                    {/* socials */}
                    <div className="capitalize flex flex-col gap-3">
                        <h2 className="text-xl font-semibold text-white mb-3">
                            Social Links
                        </h2>
                        <div className='flex items-center gap-3'>
                            <a href="#" className='bg-white rounded-full p-2 text-black hover:bg-black hover:text-white duration-300'>
                                <FaInstagram size={20}/>
                            </a>
                            <a href="#" className='bg-white rounded-full p-2 text-black hover:bg-black hover:text-white duration-300'>
                                <FaFacebook size={20}/>
                            </a>
                            <a href="#" className='bg-white rounded-full p-2 text-black hover:bg-black hover:text-white duration-300'>
                                <FaXTwitter size={20}/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* FOOTER BOTTOM */}
                <div className='flex sm:flex-row flex-col items-center gap-5 text-sm justify-between text-gray-500 border-t border-gray-700 py-6 px-1'>
                    <p>© {currentDate.getFullYear()} Digitools. All rights reserved.</p>
                    <span className='flex items-center gap-7'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
