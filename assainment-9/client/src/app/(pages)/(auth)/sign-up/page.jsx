import SignUpForm from './SignUpForm';

export const metadata = {
  title: 'MediQueue | Sign In',
};

const SignUpPage = () => {
  return (
    <section className="w-full sm:max-w-[500px]">
      <SignUpForm />
    </section>
  );
};

export default SignUpPage;
