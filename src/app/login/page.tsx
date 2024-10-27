import LoginForm from '@/Components/Login/Login-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Dogs',
  description: 'Entre na sua conta no site Dogs',
};

const LoginPage = async () => {
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
