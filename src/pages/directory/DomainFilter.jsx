import Dropdown from "./Dropdown";
import MenuItem from "./MenuItem";
import Marker from "./Marker";

export default function DomainFilter({ domains, counts, value, open, onToggle, onSelect }) {
    return (
        <Dropdown
            label="domain"
            value={value}
            active={value !== "all"}
            open={open}
            onToggle={onToggle}
        >
            {domains.map((domain) => {
                const selected = domain === value;
                return (
                    <MenuItem
                        key={domain}
                        selected={selected}
                        onClick={() => onSelect(domain)}
                        marker={<Marker variant="dot" checked={selected} />}
                        trailing={counts[domain]}
                    >
                        {domain}
                    </MenuItem>
                );
            })}
        </Dropdown>
    );
}