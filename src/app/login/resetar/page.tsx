import LoginResetarForm from '@/Components/Login/Login-restar-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trocar sua senha | Dogs',
  description: 'Troque sua senha no site Dogs',
};

type resetarSeachParams = {
  searchParams: {
    key: string;
    login: string;
  };
};

export default async function ResetarPage({ searchParams }: resetarSeachParams) {
  return (
    <main>
      <div className="animeLeft">
        <h1 className="title">Troque sua senha</h1>
        <LoginResetarForm keyToken={searchParams.key} login={searchParams.login} />
      </div>
    </main>
  );
}
