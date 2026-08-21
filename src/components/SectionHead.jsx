import styles from './SectionHead.module.css'

// PageSection heading with a title on the left and a small meta note on the right.
export default function SectionHead({ title, meta }) {
  return (
    <div className={styles.head}>
      <div className={styles.title}>{title}</div>
      <div className={styles.meta}>{meta}</div>
    </div>
  )
}
