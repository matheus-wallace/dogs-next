import Image from 'next/image';
import styles from './footer.module.css';

const Footer = async () => {
  return (
    <footer className={styles.footer}>
      <Image src={'/Assets/dogs-footer.svg'} alt="Dogs" width={28} height={22} />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
