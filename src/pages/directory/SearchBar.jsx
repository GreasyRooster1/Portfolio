// Compact project search with "domain" (single) and "has" (multi) dropdowns.
// Fonts: JetBrains Mono (400/500). Press "/" to focus, Esc to close menu / clear.
import { useEffect, useRef, useState } from "react";

const C = {
  bg: "#12151a", hover: "#171a1f", text: "#e6e9ee", body: "#98a0ac",
  muted: "#828b98", faint: "#59616c", accent: "#79cbe6",
  line: "rgba(255,255,255,.14)", lineSoft: "rgba(255,255,255,.12)",
};
const mono = "'JetBrains Mono', ui-monospace, monospace";
const caps = { fontFamily: mono, fontWeight: 500, letterSpacing: ".08em", textTransform: "uppercase" };

const DEFAULT_DOMAINS = ["all", "systems", "graphics", "product", "compilers"];
const DEFAULT_PROOFS = [
  { key: "demo", label: "live demo" },
  { key: "src", label: "source" },
  { key: "bench", label: "benchmarks" },
];

export default function SearchBar({
  domains = DEFAULT_DOMAINS,
  proofs = DEFAULT_PROOFS,
  counts = {},             // optional { systems: 4, ... } shown in the domain menu
  onChange = () => {},     // ({ query, domain, proofs }) => void
}) {
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState("all");
  const [has, setHas] = useState([]);
  const [open, setOpen] = useState(null); // "domain" | "has" | null
  const [focused, setFocused] = useState(false);
  const barRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => onChange({ query, domain, proofs: has }), [query, domain, has]);

  useEffect(() => {
    const down = (e) => { if (barRef.current && !barRef.current.contains(e.target)) setOpen(null); };
    const key = (e) => {
      const el = inputRef.current;
      if (e.key === "/" && document.activeElement !== el) { e.preventDefault(); el?.focus(); }
      else if (e.key === "Escape") {
        if (open) setOpen(null);
        else if (document.activeElement === el) { setQuery(""); el.blur(); }
      }
    };
    window.addEventListener("mousedown", down);
    window.addEventListener("keydown", key);
    return () => { window.removeEventListener("mousedown", down); window.removeEventListener("keydown", key); };
  }, [open]);

  const toggleHas = (k) => setHas((h) => (h.includes(k) ? h.filter((x) => x !== k) : [...h, k]));
  const hasLabel = has.length === 0 ? "any"
    : has.length === 1 ? proofs.find((p) => p.key === has[0])?.label
    : `${has.length} selected`;

  return (
    <div
      ref={barRef}
      style={{
        display: "flex", alignItems: "stretch", height: 40, maxWidth: 640, position: "relative",
        background: C.bg, border: `1px solid ${focused ? C.accent : C.line}`, transition: "border-color .15s",
      }}
    >
      <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", gap: 10, padding: "0 12px" }}>
        <span style={{ fontFamily: mono, fontWeight: 500, fontSize: 12, color: C.accent, flex: "none" }}>$</span>
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="search projects"
          spellCheck={false}
          style={{
            flex: 1, minWidth: 0, height: "100%", background: "transparent", border: 0, outline: "none",
            fontFamily: mono, fontSize: 13, color: C.text, caretColor: C.accent,
          }}
        />
        {query && (
          <button
            onClick={() => { setQuery(""); inputRef.current?.focus(); }}
            style={{ ...caps, fontSize: 10, flex: "none", background: "transparent", border: `1px solid ${C.line}`, color: C.muted, padding: "4px 6px", cursor: "pointer" }}
          >
            clear
          </button>
        )}
        <span style={{ fontFamily: mono, fontWeight: 500, fontSize: 11, color: C.faint, border: `1px solid ${C.line}`, padding: "3px 6px", flex: "none" }}>/</span>
      </div>

      <Dropdown
        label="domain" value={domain} active={domain !== "all"}
        open={open === "domain"} onToggle={() => setOpen(open === "domain" ? null : "domain")}
      >
        {domains.map((d) => (
          <MenuItem key={d} selected={d === domain} onClick={() => { setDomain(d); setOpen(null); }}
            marker={<Square on={d === domain} size={7} />} trailing={counts[d]}>
            {d}
          </MenuItem>
        ))}
      </Dropdown>

      <Dropdown
        label="has" value={hasLabel} active={has.length > 0}
        open={open === "has"} onToggle={() => setOpen(open === "has" ? null : "has")}
        footer="projects must have all checked"
      >
        {proofs.map((p) => {
          const on = has.includes(p.key);
          return (
            <MenuItem key={p.key} selected={on} onClick={() => toggleHas(p.key)} marker={<Square on={on} size={11} tick />}>
              {p.label}
            </MenuItem>
          );
        })}
      </Dropdown>
    </div>
  );
}

function Dropdown({ label, value, active, open, onToggle, footer, children }) {
  const [hover, setHover] = useState(false);
  return (
    <div style={{ position: "relative", flex: "none", display: "flex" }}>
      <button
        onClick={onToggle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          ...caps, fontSize: 10, height: "100%", display: "flex", alignItems: "center", gap: 9, padding: "0 12px",
          background: open || hover ? C.hover : "transparent", border: 0, borderLeft: `1px solid ${C.lineSoft}`, cursor: "pointer",
        }}
      >
        <span style={{ color: C.faint }}>{label}</span>
        <span style={{ color: active ? C.accent : C.text }}>{value}</span>
        <span style={{ color: C.muted, fontSize: 9 }}>{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div
          style={{
            position: "absolute", top: "calc(100% + 1px)", right: -1, minWidth: 220, zIndex: 5, padding: "6px 0",
            background: C.bg, border: `1px solid ${C.line}`, boxShadow: "0 12px 32px rgba(0,0,0,.5)",
          }}
        >
          {children}
          {footer && (
            <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", marginTop: 6, padding: "10px 16px 6px", fontFamily: mono, fontSize: 10, lineHeight: 1.5, color: C.faint }}>
              {footer}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function MenuItem({ selected, onClick, marker, trailing, children }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...caps, fontSize: 11, letterSpacing: ".06em", width: "100%", display: "flex", alignItems: "center", gap: 10,
        padding: "11px 16px", border: 0, cursor: "pointer", textAlign: "left",
        background: hover ? C.hover : "transparent", color: selected ? C.accent : C.body,
      }}
    >
      {marker}
      <span style={{ flex: 1 }}>{children}</span>
      {trailing != null && <span style={{ color: C.faint }}>{trailing}</span>}
    </button>
  );
}

function Square({ on, size, tick }) {
  return (
    <span
      style={{
        width: size, height: size, flex: "none", boxSizing: "border-box",
        border: `1px solid ${on ? C.accent : C.faint}`, background: on ? C.accent : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, color: "#0d0f12",
      }}
    >
      {tick && on ? "✓" : null}
    </span>
  );
}
