import { Suspense } from 'react';
import SignUpForm from './SignUpForm';
import PageLoader from '@/components/PageLoader';

export const metadata = {
  title: 'MediQueue | Sign In',
};

const SignUpPage = () => {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <Suspense fallback={<PageLoader />}>
        <SignUpForm />
      </Suspense>
    </section>
  );
};

export default SignUpPage;
