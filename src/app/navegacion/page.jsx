import ContentSection from '@/app/components/ContentSection';
import styles from '../styles/Page.module.css';

export const metadata = {
  title: 'Navegación Segura',
  description: 'Consejos para navegar de forma segura en internet',
};

export default function Navegacion() {
  return (
    <div className={styles.container}>
      <ContentSection
        title="Navega por internet con seguridad"
        content="Internet es una herramienta poderosa, pero hay que usarla con cuidado:"
        listItems={[
          'Verifica que los sitios web usen "https://" en la barra de direcciones.',
          'Actualiza tu navegador y aplicaciones regularmente.',
          'Evita hacer clic en enlaces sospechosos o anuncios llamativos.',
          'Usa un antivirus si es posible.',
        ]}
      />
    </div>
  );
}
