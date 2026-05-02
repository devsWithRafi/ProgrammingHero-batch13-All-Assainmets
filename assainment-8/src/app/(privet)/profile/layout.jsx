import Footer from '@/components/footer/Footer';
import Navber from '@/components/navber/Navber';

const PrivetLayout = ({ children }) => {
  return (
    <>
      <Navber />
      <main className="bg-[#f7f7f7] text-black">{children}</main>
      <Footer />
    </>
  );
};

export default PrivetLayout;
