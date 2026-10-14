import styles from "./dropdown.module.css";
import React from "react";
import MenuItem from "@/pages/directory/MenuItem.jsx";
import Marker from "@/pages/directory/Marker.jsx";

export default function Dropdown(props) {
    const [active, setActive] = React.useState(false);
    const [selected, setSelected] = React.useState(new Array(props.list.length).fill(false));

    return (
        <div className={styles.root}>
            <button
                type="button"
                className={styles.trigger}
                aria-expanded={active}
                onClick={()=>setActive(!active)}
            >
                <span className={styles.label}>{props.label}</span>
                <span className={styles.valueActive}>{props.value}</span>
                <span className={styles.caret}>{active ? "▲" : "▼"}</span>
            </button>

            {active && (
                <div className={styles.menu}>
                    {props.list.map((lang,index) => {
                        const isSelected = lang === props.value;
                        return (
                            <MenuItem
                                key={index}
                                selected={isSelected}
                                onClick={() => {
                                    console.log(selected);
                                    setSelected(selected.map((item, i) => i === index ? !selected[index] : item));
                                }}
                                marker={<Marker variant="dot" checked={isSelected} />}
                                trailing={1}
                            >
                                {lang}
                            </MenuItem>
                        );
                    })}
                    {/*{footer && <div className={styles.footer}>{footer}</div>}*/}
                </div>
            )}
        </div>
    );
}