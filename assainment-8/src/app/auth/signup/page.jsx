import Image from 'next/image';
import React from 'react';
import SignupForm from './_components/SignupForm';
import { assets } from '@/assets/assets';

const SignUpPage = () => {
  return (
    <section className="w-full md:h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-sm flex w-full max-w-[850px] md:h-[70%] overflow-hidden">
        <div className="w-1/2 md:flex hidden">
          <Image
            src={assets.loginSideImage}
            alt=""
            width={700}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 w-full py-5 overflow-y-auto px-6">
          <Image src={assets.webLogo} alt="logo" width={100} height={33} />
          <h2 className="font-bold text-2xl font-viga mt-7">Get Started</h2>
          <p className="font-poppins text-sm text-zinc-500 mt-1">
            Create your account to start exploring the library.
          </p>
          <SignupForm />
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
