import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About Us</h1>
      <p>This page tells you about our awesome project deployed on Cloudflare.</p>
      <a href="/" className={styles.backLink}>← Back to Home</a>
    </div>
  );
}
