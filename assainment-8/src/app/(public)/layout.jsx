import Navber from '@/components/navber/Navber';

const MainLayout = ({ children }) => {
  return (
    <>
      <main className="bg-[#F8FAFC] text-black min-h-screen">
        <Navber />
        {children}
      </main>
    </>
  );
};

export default MainLayout;
