import ContentSection from '@/app/components/ContentSection';
import Link from 'next/link';
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
      <div className={styles.additionalContent}>
        <p className={styles.warning}>
          <strong>¡Cuidado!</strong> Si recibes mensajes pidiéndote datos personales, no respondas y verifica con alguien de confianza.
        </p>
        <Link href="/recursos/guia-proteccion-datos.pdf" download className={styles.downloadButton}>
          Descargar Guía en PDF
        </Link>
        <p>
          Comparte estos consejos: <Link href="https://wa.me/?text=Aprende%20a%20proteger%20tus%20datos:%20[URL_DEL_SITIO]" className={styles.shareButton}>WhatsApp</Link>
        </p>
        <p>
          Más detalles en nuestra <Link href="/privacidad">Política de Privacidad</Link>.
        </p>
      </div>
    </div>
  );
}