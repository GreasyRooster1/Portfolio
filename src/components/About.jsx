import styles from './About.module.css'
import { ABOUT_STATS, EXPERIMENTS } from '../data'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div>
        <div className={styles.label}>About</div>
        <p className={styles.bio}>
          Placeholder bio — a few lines in your own voice about the work you want more of, how you
          make decisions, and what you're looking for next.
        </p>
        <div className={styles.stats}>
            <div>
                <div className={`${styles.statValue} ${styles.statValueAccent}`}>
                    11 Years
                </div>
                <div className={styles.statLabel}>Programming Experience</div>
            </div>
            <div>
                <div className={`${styles.statValue}`}>
                    Hundreds
                </div>
                <div className={styles.statLabel}>Of Projects</div>
            </div>
        </div>
      </div>
      <div>
        <div className={styles.label}>Experiments — one evening each</div>
        <div className={styles.experiments}>
          {EXPERIMENTS.map((e, i) => (
            <a
              key={e.name}
              href="#7a"
              className={[
                styles.experiment,
                e.muted ? styles.experimentMuted : '',
                i === EXPERIMENTS.length - 1 ? styles.experimentLast : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {e.name}
              <span className={styles.experimentTag}>{e.tag}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
