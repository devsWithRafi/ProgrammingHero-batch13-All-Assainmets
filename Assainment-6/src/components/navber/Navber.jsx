import { RiShoppingCartLine } from 'react-icons/ri';
import { assets } from '../../assets/assets';
import { navItems } from './navItems';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";


const Navber = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm fixed left-0 right-0 top-0 z-100">
            <nav className="max-w-[1500px] p-5 mx-auto transition-all duration-300">
                {/* NAV TOP */}
                <div className="flex gap-5 items-center justify-between">
                    {/* logo */}
                    <a href="#">
                        <img
                            src={assets.DigiToolsLogo}
                            alt="DigiToolsLogo"
                            className="md:w-[140px] w-[120px]"
                        />
                    </a>

                    {/* nav items */}
                    <div className="md:flex hidden items-center gap-5 font-medium">
                        {navItems.map((item, index) => (
                            <a
                                href={item.link}
                                key={index}
                                className="text-gray-500 text-md hover:text-black duration-300"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* nav right */}
                    <div className="flex items-center gap-3">
                        <span className="flex items-center">
                            <RiShoppingCartLine size={18} />
                            <sup className="p-1 h-4 -ml-2 text-xs bg-black text-white flex items-center justify-center rounded-full">
                                0
                            </sup>
                        </span>
                        <a
                            href="#"
                            className="font-medium md:flex hidden text-md"
                        >
                            Login
                        </a>
                        <button className="btn md:flex hidden text-white rounded-full px-5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
                            Get Started
                        </button>

                        {/* menu button */}
                        <button onClick={() => setMobileMenuOpen(prev => !prev)} className='md:hidden block'>
                            {!mobileMenuOpen ? <FiMenu size={25} /> : <RxCross2 size={25}/>}
                        </button>
                    </div>
                </div>

                {/* NAV BOTTOM MOBILE */}
                <div className={`flex flex-col gap-1 overflow-hidden transition-all duration-300 
                    ${mobileMenuOpen ? 'max-h-200 opacity-100 mt-5' : 'max-h-0 opacity-0'}`}>
                    {/* nav items */}
                    <div className="flex flex-col font-medium">
                        {navItems.map((item, index) => (
                            <a
                                href={item.link}
                                key={index}
                                className={`text-gray-500 ${navItems.length - 1 !== index && 'border-b'} 
                                    border-gray-100 py-2 text text-md hover:text-black duration-300`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <button className="btn w-full mt-5 text-white rounded-full px-5 bg-black">
                        Login
                    </button>
                    <button className="btn w-full text-white rounded-full px-5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
                        Get Started
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navber;
