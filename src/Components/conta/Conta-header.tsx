'use client';

import { useEffect, useState } from 'react';
import FeedIcon from '@/icons/feed-icon';
import EstatisticasIcon from '@/icons/estatisticas';
import AdicionarIcon from '@/icons/adicionar-icon';
import SairIcon from '@/icons/sair-icon';
import styles from './Conta-header.module.css';
import { usePathname } from 'next/navigation';
import useMedia from '@/Hooks/useMedia';
import Link from 'next/link';
import logout from '@/actions/logout';
import { useUser } from '@/context/userContext';

function getTitle(pathname: string) {
  switch (pathname) {
    case '/conta/postar':
      return 'Poste sua foto';
      break;
    case '/conta/estatisticas':
      return 'Estatísticas';
      break;

    default:
      return 'Minha Conta';
      break;
  }
}

export default function ContaHeader() {
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  const { setUser } = useUser();

  async function handleLogout() {
    await logout();
    setUser(null);
  }

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <h1 className="title">{getTitle(pathname)}</h1>
      {mobile && (
        <button
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileMenu} ${mobileMenu && styles.mobileMenuActive}`}
        ></button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.mobileMenuActive}`}>
        <Link href="/conta" className={pathname === '/conta' ? 'active' : ''}>
          <FeedIcon />
          {mobile && 'Minhas Fotos'}
        </Link>
        <Link href="/conta/estatisticas" className={pathname === '/conta/estatisticas' ? 'active' : ''}>
          <EstatisticasIcon />
          {mobile && 'Estatísticas'}
        </Link>
        <Link href="/conta/postar" className={pathname === '/conta/postar' ? 'active' : ''}>
          <AdicionarIcon />
          {mobile && 'Adicionar foto'}
        </Link>
        <button onClick={handleLogout}>
          <SairIcon />
          {mobile && 'Sair'}
        </button>
      </nav>
    </header>
  );
}
