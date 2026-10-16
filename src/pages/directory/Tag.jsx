import styles from "./tag.module.css"

export function Tag(props) {
    return (
        <>
            <style>
                .{`tag-${props.key}{`}
                    --tag-color:{props.color} !important;
                {"}"}
            </style>
            <span className={`${styles.tag} tag-${props.key}`}>{props.name}</span>
        </>
    )
}