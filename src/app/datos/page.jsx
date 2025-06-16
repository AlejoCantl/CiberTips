import ContentSection from '@/app/components/ContentSection';
import styles from '../styles/Page.module.css';

export const metadata = {
  title: 'Protección de Datos Personales',
  description: 'Cómo proteger tus datos personales en línea',
};

export default function Datos() {
  return (
    <div className={styles.container}>
      <ContentSection
        title="Cuida tus datos personales"
        content="Tus datos personales (como nombre, dirección o número de teléfono) son valiosos. Protégelos con estos consejos:"
        listItems={[
          'No compartas información personal en redes sociales públicas.',
          'Revisa la configuración de privacidad en tus aplicaciones.',
          'Usa aplicaciones y sitios web confiables.',
          'Evita conectar tus dispositivos a redes Wi-Fi públicas sin protección.',
        ]}
      />
    </div>
  );
}