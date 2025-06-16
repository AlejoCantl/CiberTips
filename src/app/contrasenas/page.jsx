import style from '../styles/Contraseñas.module.css'
import styles from '../styles/Page.module.css';

export const metadata = {
  title: 'Contraseñas Seguras',
  description: 'Consejos para crear contraseñas seguras',
};

export default function Contrasenas() {
  return (
    <div >
      <section className={style.hero}>
        <h1 className={style.title}>🔐 Contraseñas Seguras</h1>
        <p className={style.subtitle}>
          Una contraseña segura es una clave personal que protege tu información en internet. Es como la cerradura de tu casa: si es débil, cualquiera puede entrar.
        </p>
      </section>

      <section className={style.sectionGrid}>
        <div className={style.card}>
          <h2>✅ Características de una buena contraseña</h2>
          <ul>
            <li><strong>Larga</strong>: mínimo 12 caracteres.</li>
            <li><strong>Combinada</strong>: incluye letras, números y símbolos.</li>
            <li><strong>Única</strong>: no la uses en varios sitios.</li>
            <li><strong>Inolvidable</strong> para ti, pero difícil para otros.</li>
          </ul>
          <p><strong>Ejemplo seguro:</strong> <code>MiP3rr0!SeLl4maToby</code></p>
          <p><strong>Ejemplo débil:</strong> <code>123456</code>, <code>miNombre</code></p>
        </div>

        <div className={style.card}>
          <h2>🚫 Errores comunes</h2>
          <ul>
            <li>Usar fechas de nacimiento.</li>
            <li>Usar nombres de hijos o mascotas.</li>
            <li>Compartir tu contraseña con otras personas.</li>
          </ul>

          <h2>🧠 Recomendaciones prácticas</h2>
          <ul>
            <li>Cambia tus contraseñas cada 6 meses.</li>
            <li>Activa la verificación en dos pasos.</li>
            <li>No uses Wi-Fi públicas para ingresar contraseñas.</li>
          </ul>
        </div>
      </section>

      <section className={style.interactiva}>
        <h2>🎮 Actividad Interactiva</h2>
        <p>¿Es esta una contraseña segura? Verás ejemplos y deberás adivinar si son seguras o no. ¡Aprende jugando!</p>
      </section>

      <section className={style.recursos}>
        <h2>📥 Recursos</h2>
        <ul>
          <li><a href="/recursos/guia.pdf" target="_blank">Guía en PDF: Cómo crear y recordar contraseñas seguras</a></li>
          <li><a href="/recursos/infografia.png" target="_blank">Infografía: 7 pasos para una contraseña fuerte</a></li>
        </ul>
      </section>
    </div>
  );
}
