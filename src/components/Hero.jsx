import styles from './Hero.module.css'

const SECONDARY_ACTIONS = ['github', 'email']

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div>
        <div className={styles.eyebrow}>
          full stack developer · web · systems programming · graphics
        </div>
        <h1 className={styles.title}>
          Interfaces and the <span className={styles.accent}>machinery</span> underneath them.
        </h1>
      </div>
      <div>
        <p className={styles.lede}>
          Eleven years taking blank projects to full projects. Hundreds of experiments, games, apps and utilities created over the years. Below are some of my personal favorites
        </p>
        <div className={styles.actions}>
          {/*<a href="#7a" className={`${styles.btn} ${styles.btnPrimary}`}>*/}
          {/*  résumé.pdf*/}
          {/*</a>*/}
          <a href="https://github.com/GreasyRooster1/" className={`${styles.btn} ${styles.btnPrimary}`}>
            GitHub
          </a>
          <a href="mailto:dillonjwilson1@gmail.com" className={`${styles.btn}  ${styles.btnGhost}`}>
            Email
          </a>
        </div>
        {/*<div className={styles.availability}>available · [City] · replies within a day</div>*/}
      </div>
    </header>
  )
}
