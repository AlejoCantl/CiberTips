import ContentSection from '@/app/components/ContentSection';
import styles from '../app/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <ContentSection
          title="Bienvenidos"
          content="Este sitio está diseñado para ayudar a las comunidades rurales a usar la tecnología de forma segura. Aquí encontrarás consejos prácticos sobre cómo proteger tus dispositivos, datos personales y evitar riesgos en internet."
        />
        <ContentSection
          title="¿Por qué es importante la seguridad digital?"
          content="En un mundo cada vez más conectado, proteger tu información es clave. En las comunidades rurales, donde el acceso a internet puede ser limitado, es aún más importante conocer las prácticas básicas para evitar problemas como robos de datos o estafas en línea."
        />
      </div>
    </>
  );
}
