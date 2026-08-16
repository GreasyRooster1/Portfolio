import styles from './About.module.css'
import { ABOUT_STATS, EXPERIMENTS } from '../data'

export default function About(props) {
  return (
    <section id="about" className={styles.section}>
      <div>
        <div className={styles.label}>About</div>
        <p className={styles.bio}>
          Placeholder bio — a few lines in your own voice about the work you want more of, how you
          make decisions, and what you're looking for next.
        </p>

      </div>
    </section>
  )
}
