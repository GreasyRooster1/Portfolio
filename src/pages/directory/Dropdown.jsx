import styles from "./dropdown.module.css";
import React from "react";

export default function Dropdown({ label, value, onToggle, footer, children }) {
    const [active, setActive] = React.useState(false);

    return (
        <div className={styles.root}>
            <button
                type="button"
                className={styles.trigger}
                aria-expanded={active}
                onClick={()=>setActive(!active)}
            >
                <span className={styles.label}>{label}</span>
                <span className={styles.valueActive}>{value}</span>
                <span className={styles.caret}>{active ? "▲" : "▼"}</span>
            </button>

            {active && (
                <div className={styles.menu}>
                    {children}
                    {footer && <div className={styles.footer}>{footer}</div>}
                </div>
            )}
        </div>
    );
}