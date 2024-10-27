import styles from './Login.module.css';

const Loginlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.login}>
      <div className={styles.forms}>{children}</div>
    </div>
  );
};

export default Loginlayout;
