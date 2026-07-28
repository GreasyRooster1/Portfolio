import Placeholder from '@components/Placeholder'
import LinkRow from '@components/LinkRow'
import styles from './FeaturedHero.module.css'

const LINKS = [{ label: 'live demo', accent: true }, { label: 'source' }, { label: 'writeup' }]

export default function FeaturedHero() {
  return (
    <section className={styles.section}>
      <Placeholder height={"90vh"} note="hero capture — flagship project, 2240 × 1260" />
      <div className={styles.overlay}>
        <div>
          <div className={styles.eyebrow}>featured · 2024-2026</div>
          <div className={styles.title}>Teaching Students</div>
          <p className={styles.desc}>
            Currently teaching Javascript, Arduino, Scratch and Python to students ages 6-16
          </p>
          <LinkRow links={LINKS} className={styles.links} />
        </div>
        <div className={styles.metrics}>
          <div>
            <div className={styles.metricLabel}>students</div>
            <div className={styles.metricValue}>300+</div>
          </div>
          <div>
            <div className={styles.metricLabel}>total projects</div>
            <div className={styles.metricValue}>2,467</div>
          </div>
          <div>
            <div className={styles.metricLabel}>stack</div>
            <div className={styles.stack}>
              JS · Rust
              <br />
              Firebase
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
