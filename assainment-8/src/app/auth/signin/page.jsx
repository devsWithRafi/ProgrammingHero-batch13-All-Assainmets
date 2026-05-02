import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import SigninForm from './_components/SigninForm';

const SignInPage = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
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
          <h2 className="font-bold text-2xl font-viga mt-7">Welcome Back</h2>
          <p className="font-poppins text-sm text-zinc-500 mt-1">
            Please enter your credentials to access the library.
          </p>
          <SigninForm />
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
