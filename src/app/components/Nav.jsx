import Link from 'next/link';
import styles from '../styles/Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/contrasenas">Contraseñas Seguras</Link></li>
        <li><Link href="/datos">Protección de Datos</Link></li>
        <li><Link href="/navegacion">Navegación Segura</Link></li>
        <li><Link href="/estafas">Evitar Estafas</Link></li>
      </ul>
    </nav>
  );
}