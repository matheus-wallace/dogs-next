import ContaHeader from '@/Components/conta/Conta-header';

export default async function ContaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <ContaHeader />
      {children}
    </div>
  );
}
