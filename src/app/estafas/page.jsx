import ContentSection from '@/app/components/ContentSection';
import styles from '../styles/Page.module.css';

export const metadata = {
  title: 'Evitar Estafas en Línea',
  description: 'Cómo identificar y evitar estafas en línea',
};

export default function Estafas() {
  return (
    <div className={styles.container}>
      <ContentSection
        title="Protege tu dinero y datos de las estafas"
        content="Las estafas en línea son comunes, pero puedes evitarlas:"
        listItems={[
          'Desconfía de mensajes o correos que piden datos personales o dinero.',
          'No hagas transferencias a desconocidos.',
          'Verifica la identidad de quien te contacta antes de compartir información.',
          'Si algo parece demasiado bueno para ser cierto, probablemente sea una estafa.',
        ]}
      />
    </div>
  );
}