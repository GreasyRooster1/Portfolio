// Compact project search with "domain" (single) and "has" (multi) dropdowns.
// Press "/" to focus, Esc to close menu / clear.
import { useCallback, useEffect, useRef, useState } from "react";
import { DEFAULT_DOMAINS, DEFAULT_PROOFS } from "./constants";
import { useSearchHotkeys } from "./useSearchHotkeys";
import SearchInput from "./SearchInput";
import DomainFilter from "./DomainFilter";
import ProofFilter from "./ProofFilter";
import styles from "./SearchBar.module.css";

export default function SearchBar({domains = DEFAULT_DOMAINS,proofs = DEFAULT_PROOFS,counts = {},onChange, }) {
    const [query, setQuery] = useState("");
    const [domain, setDomain] = useState("all");
    const [selectedProofs, setSelectedProofs] = useState([]);
    const [openMenu, setOpenMenu] = useState(null); // "domain" | "has" | null

    const containerRef = useRef(null);
    const inputRef = useRef(null);

    // Keep the latest onChange in a ref so an inline callback from the
    // parent doesn't re-fire the effect below on every render.
    const onChangeRef = useRef(onChange);
    useEffect(() => {
        onChangeRef.current = onChange;
    });

    useEffect(() => {
        onChangeRef.current?.({ query, domain, proofs: selectedProofs });
    }, [query, domain, selectedProofs]);

    const closeMenu = useCallback(() => setOpenMenu(null), []);
    const clearQuery = useCallback(() => setQuery(""), []);
    const toggleMenu = (name) => setOpenMenu((current) => (current === name ? null : name));

    useSearchHotkeys({
        containerRef,
        inputRef,
        isMenuOpen: openMenu !== null,
        closeMenu,
        clearQuery,
    });

    function handleClear() {
        clearQuery();
        inputRef.current?.focus();
    }

    function handleSelectDomain(next) {
        setDomain(next);
        closeMenu();
    }

    function handleToggleProof(key) {
        setSelectedProofs((current) =>
            current.includes(key) ? current.filter((k) => k !== key) : [...current, key]
        );
    }

    return (
        <div ref={containerRef} className={styles.bar}>
            <SearchInput
                inputRef={inputRef}
                value={query}
                onChange={setQuery}
                onClear={handleClear}
            />

            <DomainFilter
                domains={domains}
                counts={counts}
                value={domain}
                open={openMenu === "domain"}
                onToggle={() => toggleMenu("domain")}
                onSelect={handleSelectDomain}
            />

            <ProofFilter
                proofs={proofs}
                selected={selectedProofs}
                open={openMenu === "has"}
                onToggle={() => toggleMenu("has")}
                onToggleProof={handleToggleProof}
            />
        </div>
    );
}