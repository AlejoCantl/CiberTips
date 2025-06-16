import styles from '../styles/ContentSection.module.css';

export default function ContentSection({ title, content, listItems, extraContent }) {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <p>{content}</p>
      {listItems && (
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {extraContent && <p>{extraContent}</p>}
    </section>
  );
}