import Footer from '@/components/footer/Footer';
import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <>
      <section className="w-full min-h-screen flex items-center justify-center p-3">
        {children}
      </section>
      <Footer />
    </>
  );
};

export default AuthLayout;
