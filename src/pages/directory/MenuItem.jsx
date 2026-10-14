import styles from "./menuItem.module.css";

export default function MenuItem({ selected, onClick, marker, trailing, children }) {
    const className = selected ? `${styles.item} ${styles.selected}` : styles.item;

    return (
        <button type="button" className={className} onClick={onClick}>
            {marker}
            <span className={styles.text}>{children}</span>
            {trailing != null && <span className={styles.trailing}>{trailing}</span>}
        </button>
    );
}