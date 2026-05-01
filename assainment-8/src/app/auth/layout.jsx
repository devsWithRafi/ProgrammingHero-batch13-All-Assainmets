import Footer from '@/components/footer/Footer';
import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <>
      <section className="w-full h-screen flex items-center justify-center">
        {children}
      </section>
      <Footer />
    </>
  );
};

export default AuthLayout;
