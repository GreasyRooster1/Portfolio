import Placeholder from './Placeholder'
import LinkRow from './LinkRow'
import styles from './WorkCard.module.css'

export default function WorkCard({ note, imgH, title, year, desc, stats, bar, links, imgSrc}) {
  return (
    <div className={styles.card}>
      <img className={styles.image} height={imgH} src={imgSrc} alt="" />
      <div className={styles.head}>
        <div className={styles.title}>{title}</div>
        <div className={styles.year}>{year}</div>
      </div>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.stats}>
        {stats.map((s) => (
          <div key={s.k}>
            <div className={styles.statLabel}>{s.k}</div>
            <div className={styles.statValue}>{s.v}</div>
          </div>
        ))}
        {bar && (
          <div className={styles.bar}>
            <div className={styles.barFill} style={{ width: `${bar.pct}%` }} />
            <div className={styles.barTrack} />
            <div className={styles.barNote}>{bar.note}</div>
          </div>
        )}
      </div>
      <LinkRow links={links} className={styles.links} />
    </div>
  )
}
