'use client';
import ButtonBlack from '@/components/Button';
import Loading from '@/components/Loading';
import { authClient } from '@/lib/auth-client';
import { cn } from '@/lib/utils';
import { validateUrl } from '@/lib/validateUrl';
import {
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
  toast,
} from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { IoIosEye } from 'react-icons/io';
import { IoIosEyeOff } from 'react-icons/io';

const SignupForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [signupWithEmailPending, startSignupWithEmailPending] = useTransition();
  const [loginWithGooglePending, startLoginWithGooglePending] = useTransition();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      userData[key] = value.toString();
    });

    startSignupWithEmailPending(async () => {
      await authClient.signUp.email({
        ...userData,
        callbackURL: '/auth/signin',
        fetchOptions: {
          onSuccess: () => {
            toast.success('Signed in successfully!');
            router.push('/auth/signin');
          },
          onError: (ctx) => {
            toast.danger(ctx.error.message ?? 'Sign Up Failed!');
          },
        },
      });
    });
  };

  const handleLoginWithGoogle = async () => {
    startLoginWithGooglePending(async () => {
      await authClient.signIn.social({
        provider: 'google',
        callbackURL: '/',
        fetchOptions: {
          onSuccess: () => {
            toast.success('Signed in successfully!');
            router.push('/');
          },
          onError: (error) => {
            toast.danger(error.message || 'Sign Up With Google Failed!');
          },
        },
      });
    });
  };

  const formPending = signupWithEmailPending || loginWithGooglePending;

  return (
    <Form
      className={cn(
        'flex w-full flex-col gap-4 mt-5',
        formPending && 'pointer-events-none opacity-50',
      )}
      onSubmit={onSubmit}
    >
      {/* name */}
      <TextField
        isRequired
        name="name"
        type="text"
        validate={(value) => {
          if (value.replaceAll(' ', '').length < 1) {
            return 'Name must not be empty';
          }
          return null;
        }}
      >
        <Label className="font-poppins font-medium text-md">Your Name</Label>
        <Input
          placeholder="John Doe"
          className="shadow-none rounded border border-gray-200"
        />
        <FieldError />
      </TextField>

      {/* profile image url */}
      <TextField
        isRequired
        name="image"
        type="text"
        validate={(value) => {
          if (!validateUrl(value)) {
            return 'Invalid URL';
          }
          return null;
        }}
      >
        <Label className="font-poppins font-medium text-md">
          Profile Image URL
        </Label>
        <Input
          placeholder="https://example.com/profile.jpg"
          className="shadow-none rounded border border-gray-200"
        />
        <FieldError />
      </TextField>

      {/* email */}
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return 'Please enter a valid email address';
          }
          return null;
        }}
      >
        <Label className="font-poppins font-medium text-md">Email</Label>
        <Input
          placeholder="john@example.com"
          className="shadow-none rounded border border-gray-200"
        />
        <FieldError />
      </TextField>

      {/* password */}
      <TextField
        isRequired
        minLength={8}
        name="password"
        type={showPassword ? 'text' : 'password'}
        validate={(value) => {
          if (value.length < 8) {
            return 'Password must be at least 8 characters';
          }
          if (!/[A-Z]/.test(value)) {
            return 'Password must contain at least one uppercase letter';
          }
          if (!/[0-9]/.test(value)) {
            return 'Password must contain at least one number';
          }
          return null;
        }}
      >
        <Label className="font-poppins font-medium text-md">Password</Label>
        <span className="w-full flex items-center justify-between relative">
          <Input
            placeholder="Enter your password"
            className="shadow-none rounded border border-gray-200 w-full"
          />
          {!showPassword ? (
            <IoIosEye
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 cursor-pointer text-lg text-zinc-500 hover:text-black hover:scale-102 duration-200"
            />
          ) : (
            <IoIosEyeOff
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 cursor-pointer text-lg text-zinc-500 hover:text-black hover:scale-102 duration-200"
            />
          )}
        </span>
        <FieldError />
      </TextField>

      <ButtonBlack type="submit" className="w-full capitalize mt-3">
        {signupWithEmailPending ? <Loading text="Processing..." /> : 'Sign Up'}
      </ButtonBlack>

      {/* continue with google */}
      <span className="w-full flex items-center justify-center overflow-hidden py-2">
        <Separator className="w-1/3" />
        <p className="text-nowrap font-poppins capitalize text-zinc-500 text-sm mx-5">
          or
        </p>
        <Separator className="w-1/3" />
      </span>

      <ButtonBlack
        type="button"
        onClick={handleLoginWithGoogle}
        className="w-full capitalize hover:shadow-2xl hover:shadow-gray-300/50"
        buttonType="outline"
      >
        {loginWithGooglePending ? (
          <Loading text="Processing..." />
        ) : (
          'continue with google'
        )}
      </ButtonBlack>

      <Description className="flex items-center gap-2 justify-center pb-10">
        Already have an account?
        <Link href="/auth/signin" className="text-black hover:underline">
          Sign In
        </Link>
      </Description>
    </Form>
  );
};

export default SignupForm;
