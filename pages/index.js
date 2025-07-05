import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Next.js Cloudflare Site</h1>
      <p>This site is ready to deploy on Cloudflare Pages.</p>
      <nav>
        <a href="/about" className={styles.link}>About</a>
        <a href="/contact" className={styles.link}>Contact</a>
      </nav>
    </div>
  );
}
