import Navber from '@/components/navber/Navber';

const MainLayout = ({ children }) => {
  return (
    <>
      <main className="bg-[#f7f7f7] text-black min-h-screen">
        <Navber />
        {children}
      </main>
    </>
  );
};

export default MainLayout;
