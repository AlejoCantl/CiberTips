import Nav from './Nav';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Seguridad Digital para Comunidades Rurales</h1>
      <Nav />
    </header>
  );
}