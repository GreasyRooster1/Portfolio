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
                active={props.language !== "all"}
                open={open}
                onToggle={props.onLangToggle}
            >
                {props.languages.map((lang) => {
                    const selected = lang === props.language;
                    return (
                        <MenuItem
                            key={lang}
                            selected={selected}
                            onClick={() => onSelect(lang)}
                            marker={<Marker variant="dot" checked={selected} />}
                            trailing={1}
                        >
                            {lang}
                        </MenuItem>
                    );
                })}
            </Dropdown>

        </div>
    );
}