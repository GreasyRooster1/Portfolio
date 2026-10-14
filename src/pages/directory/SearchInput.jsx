import styles from "./searchInput.module.css";
import DomainFilter from "@/pages/directory/DomainFilter.jsx";
import Dropdown from "@/pages/directory/Dropdown.jsx";
import MenuItem from "@/pages/directory/MenuItem.jsx";
import Marker from "@/pages/directory/Marker.jsx";


export default function SearchInput(props) {
    return (
        <div className={styles.field}>
            <span className={styles.prompt}>$</span>

            <input
                className={styles.input}
                value={props.value}
                onChange={props.changeHandle}
                placeholder="search projects"
                spellCheck={false}
            />

            <Dropdown
                label="language"
                value={props.language}
                list = {props.languages}
                active={props.language !== "all"}
                open={open}
                onToggle={props.onLangToggle}
            >
            </Dropdown>

        </div>
    );
}