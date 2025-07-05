import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <p>Email us at <a href="mailto:contact@mycloudflare.site">contact@mycloudflare.site</a></p>
      <a href="/" className={styles.backLink}>← Back to Home</a>
    </div>
  );
}
