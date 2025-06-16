import Nav from './Nav';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src={"/logo.png"}
          width={50}
          height={30}
          alt='logo'
        />
        <h1>CiberTips</h1>
      </div>
      <Nav />
    </header>
  );
}