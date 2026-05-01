import Footer from '@/components/footer/Footer';
import Navber from '@/components/navber/Navber';

const PrivetLayout = ({ children }) => {
  return (
    <>
      <Navber />
      <main className="bg-[#f7f7f7] text-black min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default PrivetLayout;
