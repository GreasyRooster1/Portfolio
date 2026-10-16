import styles from "./tag.module.css"

export function Tag(props) {
    return (
        <>
            <span style={`--tag-color: ${props.color}`}>
                <span>{props.name}</span>
            </span>
        </>
    )
}