import Footer from '@/components/footer/Footer';
import Navber from '@/components/navber/Navber';

const PublicLayout = ({ children }) => {
  return (
    <div className="font-poppins">
      <Navber />
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;
