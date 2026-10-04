import {useState} from "react";
import {styles} from "./search.module.css"

export default function Dropdown({ label, value, active, open, onToggle, footer, children }) {
    const [hover, setHover] = useState(false);
    return (
        <div style={{ position: "relative", flex: "none", display: "flex" }}>
            <button
                onClick={onToggle}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
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
