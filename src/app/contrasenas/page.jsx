import ContentSection from '@/app/components/ContentSection';
import styles from '../styles/Page.module.css';

export const metadata = {
  title: 'Contraseñas Seguras',
  description: 'Consejos para crear contraseñas seguras',
};

export default function Contrasenas() {
  return (
    <div className={styles.container}>
      <ContentSection
        title="¿Cómo crear una contraseña segura?"
        content="Una contraseña segura es clave para proteger tus cuentas. Sigue estos consejos:"
        listItems={[
          'Usa al menos 12 caracteres.',
          'Combina letras mayúsculas, minúsculas, números y símbolos.',
          'Evita usar información personal (como tu nombre o fecha de nacimiento).',
          'No uses la misma contraseña en diferentes sitios.',
          'Cámbialas cada 6 meses.',
        ]}
        extraContent="Ejemplo: En lugar de 'juan123', usa algo como 'J#9mP2$kL!vR'."
      />
    </div>
  );
}