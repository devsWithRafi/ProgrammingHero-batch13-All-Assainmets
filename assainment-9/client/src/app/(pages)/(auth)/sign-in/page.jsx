import SignInForm from './SignInForm';

export const metadata = {
  title: 'MediQueue | Sign In',
};

const SignInPage = () => {
  return (
    <section className="w-full sm:max-w-[500px]">
      <SignInForm />
    </section>
  );
};

export default SignInPage;
