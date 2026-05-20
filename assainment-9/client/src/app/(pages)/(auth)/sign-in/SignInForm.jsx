'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useState, useTransition } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import { IoEyeOffOutline } from 'react-icons/io5';
import Link from 'next/link';
import Loading from '@/components/Loading';
import { signIn } from '@/lib/auth-client';
import { useRouter, useSearchParams } from 'next/navigation';
import { signInFormSchema } from './signInFormSchema';

const SignInForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectRoute = searchParams.get('redirect');
  const [showpPassword, setShowPassword] = useState(false);
  const [signInWithEmailPending, startSignInWithEmailPending] = useTransition();
  const [loginWithGooglePending, startLoginWithGooglePending] = useTransition();

  const form = useForm({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    startSignInWithEmailPending(async () => {
      await signIn.email({
        email: data.email,
        password: data.password,
        callbackURL: redirectRoute || '/',
        fetchOptions: {
          onSuccess: () => {
            toast.success('Signed in successfully!', {
              position: 'top-center',
            });
            router.push(redirectRoute || '/');
          },
          onError: (ctx) => {
            toast.error(ctx.error.message ?? 'Sign In Failed!', {
              position: 'top-center',
            });
          },
        },
      });
    });
  };

  const handleLoginWithGoogle = async () => {
    startLoginWithGooglePending(async () => {
      await signIn.social({
        provider: 'google',
        callbackURL: `${window.location.origin}${redirectRoute || '/'}`,
        fetchOptions: {
          onSuccess: () => {
            toast.success('Signed in successfully!', {
              position: 'top-center',
            });
            router.push(redirectRoute || '/');
          },
          onError: (ctx) => {
            toast.error(ctx.error.message || 'Sign In With Google Failed!', {
              position: 'top-center',
            });
          },
        },
      });
    });
  };

  return (
    <Card className="w-full p-5 py-10 font-poppins shadow-sm">
      <CardHeader className={'flex flex-col items-center justify-center'}>
        <CardTitle className={'font-bold text-3xl'}>Login</CardTitle>
        <CardDescription>
          Welcome back! Please login to continue.
        </CardDescription>
      </CardHeader>

      <CardContent className={'mt-5'}>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* email */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">Email</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="jhon@gmail.com"
                    autoComplete="off"
                    className="rounded"
                  />
                  {fieldState.invalid && (
                    <FieldError
                      className={'text-xs'}
                      errors={[fieldState.error]}
                    />
                  )}
                </Field>
              )}
            />

            {/* password */}
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Password
                  </FieldLabel>
                  <span className="relative flex items-center">
                    <Input
                      {...field}
                      type={showpPassword ? 'text' : 'password'}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="********"
                      autoComplete="off"
                      className="rounded"
                    />
                    <button
                      type="button"
                      className="absolute right-3 hover:scale-105 duration-200 cursor-pointer"
                      onClick={() => setShowPassword(!showpPassword)}
                    >
                      {showpPassword ? (
                        <IoEyeOffOutline size={16} />
                      ) : (
                        <IoEyeOutline size={16} />
                      )}
                    </button>
                  </span>
                  {fieldState.invalid && (
                    <FieldError
                      className={'text-xs'}
                      errors={[fieldState.error]}
                    />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <Field orientation="horizontal" className="mt-5">
            <Button
              type="submit"
              form="form-rhf-demo"
              className="w-full h-auto p-2"
            >
              {!signInWithEmailPending ? (
                'Login'
              ) : (
                <Loading text={'Processing...'} />
              )}
            </Button>
          </Field>

          <span className="flex items-center justify-between gap-3 py-4">
            <span className="w-full h-[1px] bg-gray-200" />
            <span>OR</span>
            <span className="w-full h-[1px] bg-gray-200" />
          </span>
        </form>

        <Button
          type="button"
          form="form-rhf-demo"
          onClick={handleLoginWithGoogle}
          variant="outline"
          className="w-full h-auto p-2"
        >
          {!loginWithGooglePending ? (
            'Continue with Google'
          ) : (
            <Loading text={'Processing...'} />
          )}
        </Button>

        <div className="text-sm text-center mt-5 text-muted-foreground">
          Already have an account?{' '}
          <Link
            href={`/sign-up?redirect=${redirectRoute || '/sign-in'}`}
            className="text-primary hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignInForm;
