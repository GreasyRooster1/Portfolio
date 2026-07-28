import styles from './Hero.module.css'

const SECONDARY_ACTIONS = ['github', 'email']

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div>
        <div className={styles.eyebrow}>
          solo developer · graphics · distributed systems · product
        </div>
        <h1 className={styles.title}>
          Interfaces and the <span className={styles.accent}>machinery</span> underneath them.
        </h1>
      </div>
      <div>
        <p className={styles.lede}>
          Eight years taking projects from a blank repo to something people use daily. Everything
          below is live, benchmarked and open source.
        </p>
        <div className={styles.actions}>
          <a href="#7a" className={`${styles.btn} ${styles.btnPrimary}`}>
            résumé.pdf
          </a>
          {SECONDARY_ACTIONS.map((l) => (
            <a key={l} href="#7a" className={`${styles.btn} ${styles.btnGhost}`}>
              {l}
            </a>
          ))}
        </div>
        <div className={styles.availability}>available · [City] · replies within a day</div>
      </div>
    </header>
  )
}
