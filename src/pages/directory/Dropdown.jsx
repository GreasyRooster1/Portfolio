import styles from "./dropdown.module.css";

export default function Dropdown({ label, value, active, open, onToggle, footer, children }) {
    return (
        <div className={styles.root}>
            <button
                type="button"
                className={styles.trigger}
                aria-expanded={open}
                onClick={onToggle}
            >
                <span className={styles.label}>{label}</span>
                <span className={active ? styles.valueActive : styles.value}>{value}</span>
                <span className={styles.caret}>{open ? "▲" : "▼"}</span>
            </button>

            {open && (
                <div className={styles.menu}>
                    {children}
                    {footer && <div className={styles.footer}>{footer}</div>}
                </div>
            )}
        </div>
    );
}