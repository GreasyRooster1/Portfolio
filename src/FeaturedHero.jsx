import Placeholder from '@components/Placeholder'
import LinkRow from '@components/LinkRow'
import styles from './FeaturedHero.module.css'

const LINKS = [{ label: 'live demo', accent: true }, { label: 'source' }, { label: 'writeup' }]

export default function FeaturedHero() {
  return (
    <section className={styles.section}>
      <Placeholder height={440} note="hero capture — flagship project, 2240 × 1260" />
      <div className={styles.overlay}>
        <div>
          <div className={styles.eyebrow}>featured · 2026</div>
          <div className={styles.title}>Realtime collaboration engine</div>
          <p className={styles.desc}>
            CRDT document sync with offline reconciliation and a merge UI for genuine conflicts. Rust
            core compiled to WASM, shared by web and native.
          </p>
          <LinkRow links={LINKS} className={styles.links} />
        </div>
        <div className={styles.metrics}>
          <div>
            <div className={styles.metricLabel}>p99</div>
            <div className={styles.metricValue}>40 ms</div>
          </div>
          <div>
            <div className={styles.metricLabel}>peers</div>
            <div className={styles.metricValue}>1.2 k</div>
          </div>
          <div>
            <div className={styles.metricLabel}>stack</div>
            <div className={styles.stack}>
              Rust · WASM
              <br />
              WebSocket
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
