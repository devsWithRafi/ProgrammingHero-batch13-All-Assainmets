import Navber from '@/components/navber/Navber';

const PrivetLayout = ({ children }) => {
  return (
    <div className="font-poppins">
      <Navber />
      {children}
    </div>
  );
};

export default PrivetLayout;
