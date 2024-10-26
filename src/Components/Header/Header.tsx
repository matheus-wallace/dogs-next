import Link from 'next/link';
import React from 'react';
import styles from './header.module.css';
import Image from 'next/image';

const Header = async () => {
  const user = true;
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href={'/'}>
          <Image src={'/Assets/dogs.svg'} alt="Dogs" width={28} height={22} priority />
        </Link>
        {user ? (
          <Link className={styles.login} href={'/conta'}>
            Dogs
          </Link>
        ) : (
          <Link className={styles.login} href={'/login'}>
            Login/Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
