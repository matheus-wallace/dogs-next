'use client';

import { useUser } from '@/context/userContext';

export default function ContaPage() {
  const { user } = useUser();

  return (
    <main>
      <h1>Conta {user?.nome}</h1>
    </main>
  );
}
