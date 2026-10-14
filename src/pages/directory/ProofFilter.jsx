import Dropdown from "./Dropdown";
import MenuItem from "./MenuItem";
import Marker from "./Marker";

function summarize(selected, proofs) {
    if (selected.length === 0) return "any";
    if (selected.length === 1) return proofs.find((p) => p.key === selected[0])?.label;
    return `${selected.length} selected`;
}

export default function ProofFilter({ proofs, selected, open, onToggle, onToggleProof }) {
    return (
        <Dropdown
            label="has"
            value={summarize(selected, proofs)}
            active={selected.length > 0}
            open={open}
            onToggle={onToggle}
            footer="projects must have all checked"
        >
            {proofs.map((proof) => {
                const checked = selected.includes(proof.key);
                return (
                    <MenuItem
                        key={proof.key}
                        selected={checked}
                        onClick={() => onToggleProof(proof.key)}
                        marker={<Marker variant="box" checked={checked} />}
                    >
                        {proof.label}
                    </MenuItem>
                );
            })}
        </Dropdown>
    );
}