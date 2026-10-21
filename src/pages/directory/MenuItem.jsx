import styles from "./menuItem.module.css";

export default function MenuItem(props) {
    const className = props.selected ? `${styles.item} ${styles.selected}` : styles.item;

    return (
        <>
            <style>
                .{`item-${props.itemClass}{`}
                --item-color:{props.color} !important;
                {"}"}
            </style>
            <button type="button" className={`${className} item-${props.itemClass}`} onClick={props.onClick}>
                {props.selected?"■":"□"}
                <span className={styles.text}>{props.children}</span>
                {props.trailing != null && <span className={styles.trailing}>{props.trailing}</span>}
            </button>
        </>
    );
}