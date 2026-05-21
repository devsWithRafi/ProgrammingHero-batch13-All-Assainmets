import { Suspense } from 'react';
import SignInForm from './SignInForm';
import PageLoader from '@/components/PageLoader';

export const metadata = {
  title: 'MediQueue | Sign In',
};

const SignInPage = () => {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <Suspense fallback={<PageLoader />}>
        <SignInForm />
      </Suspense>
    </section>
  );
};

export default SignInPage;
