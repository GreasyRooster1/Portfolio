import styles from "./tag.module.css"

export function Tag(props) {
    return (
        <>
            <style>
                .{`tag-${props.tagClass}{`}
                    --tag-color:{props.color} !important;
                {"}"}
            </style>
            <div className={`${styles.tag} tag-${props.tagClass}`}>{props.name}</div>
        </>
    )
}