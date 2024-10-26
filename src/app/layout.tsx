import type { Metadata } from 'next';
import './globals.css';
import { type_second } from '@/functions/fonts';
import Header from '@/Components/Header/Header';
import Footer from '@/Components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Dogs Next',
  description: 'Rede social para cachorros',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={type_second.variable}>
        <div className="App">
          <Header />
          <main className="appBody">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
