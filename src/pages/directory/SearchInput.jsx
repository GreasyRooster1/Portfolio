import styles from "./searchInput.module.css";

export default function SearchInput({ inputRef, value, onChange, onClear }) {
    return (
        <div className={styles.field}>
            <span className={styles.prompt}>$</span>

            <input
                ref={inputRef}
                className={styles.input}
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder="search projects"
                spellCheck={false}
            />

            {value && (
                <button type="button" className={styles.clear} onClick={onClear}>
                    clear
                </button>
            )}

            <kbd className={styles.hint}>/</kbd>
        </div>
    );
}