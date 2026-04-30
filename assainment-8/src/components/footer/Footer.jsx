import { assets } from '@/assets/assets';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';

const Footer = () => {
  const currentnYear = new Date().getFullYear();

  return (
    <footer className="w-full px-3 flex flex-col bg-[#f7f7f7] py-10">
      {/* FOOTER TOP */}
      <div
        className="w-full max-w-[1500px] mx-auto h-[300px] shadow-xl rounded-xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.footerMapBenner.src})` }}
      >
        <div className="w-full h-full bg-black/70 backdrop-blur-xs flex flex-col sm:justify-end justify-center">
          <div className="w-full p-8 flex flex-col gap-5">
            <h2 className="font-ring font-medium md:text-5xl text-4xl sm:text-left text-center">
              Ready to read with purpose?
            </h2>
            <span className="flex sm:flex-row flex-col items-center justify-between gap-5">
              <p className="sm:max-w-[550px] w-[80%] sm:text-left text-center sm:text-sm text-xs text-zinc-500 font-poppins font-medium">
                Access our essential collection of summaries and mental morels.
                Quality over quantity, always.
              </p>
              <span className="sm:w-auto w-[90%] flex items-center px-4 sm:py-3 py-2 bg-white/10 border border-white/5 rounded-full gap-2">
                <FiSearch size={22} className="text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-full text-zinc-400 border-none outline-none"
                />
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="w-full max-w-[1500px] mx-auto flex sm:flex-row flex-col items-center gap-5 justify-between py-7 pb-0">
        <div className="flex items-center gap-5 text-zinc-500 font-poppins text-xs">
          <p>Copyright &copy; {currentnYear} Atheneum</p>
          <Link href="/">Terms & Conditions</Link>
        </div>
        <div className="flex items-center gap-5 text-zinc-500 font-poppins text-xs">
          <Link href="/" className='hover:text-black hover:underline duration-200'>Home</Link>
          <Link href="/books" className='hover:text-black hover:underline duration-200'>All Books</Link>
          <Link href="/profile" className='hover:text-black hover:underline duration-200'>My Profile</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
