import styles from "./searchInput.module.css";
import DomainFilter from "@/pages/directory/DomainFilter.jsx";

export default function SearchInput({ value, setValue }) {
    return (
        <div className={styles.field}>
            <span className={styles.prompt}>$</span>

            <input
                className={styles.input}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder="search projects"
                spellCheck={false}
            />

            {value && (
                <button type="button" className={styles.clear} onClick={setValue("")}>
                    clear
                </button>
            )}

        </div>
    );
}