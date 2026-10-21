import styles from "./Marker.module.css";

// "dot" is the small single-select marker; "box" is a checkbox with a tick.
export default function Marker({ variant = "dot", checked = false }) {
    const classes = [styles.marker, styles[variant], checked && styles.checked]
        .filter(Boolean)
        .join(" ");

    return (
        <span className={classes} aria-hidden="true">
    </span>
    );
}