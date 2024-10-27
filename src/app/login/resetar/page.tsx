import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trocar sua senha | Dogs',
  description: 'Troque sua senha no site Dogs',
};

export default async function ResetarPage() {
  return (
    <main>
      <h1>Resetar</h1>
    </main>
  );
}
