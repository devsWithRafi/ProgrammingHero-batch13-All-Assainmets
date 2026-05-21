import Navber from '@/components/navber/Navber';

const PublicLayout = ({ children }) => {
  return (
    <div className="font-poppins">
      <Navber />
      {children}
    </div>
  );
};

export default PublicLayout;
