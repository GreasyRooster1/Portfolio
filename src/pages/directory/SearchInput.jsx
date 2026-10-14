import styles from "./searchInput.module.css";
import Dropdown from "@/pages/directory/Dropdown.jsx";


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
                showAmt={2}
                selected={props.selectedLang}
                setSelected={props.setSelectedLang}
            >
            </Dropdown>

            <Dropdown
                label="technologies"
                value={props.technology}
                list = {props.technologies}
                showAmt={1}
                selected={props.selectedTech}
                setSelected={props.setSelectedTech}
            >
            </Dropdown>

        </div>
    );
}