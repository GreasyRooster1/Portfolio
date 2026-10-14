import styles from "./dropdown.module.css";
import React, {useRef} from "react";
import MenuItem from "@/pages/directory/MenuItem.jsx";
import Marker from "@/pages/directory/Marker.jsx";
import {useClickOutside} from "@/pages/directory/useClickOutside.js";

export default function Dropdown(props) {
    const [active, setActive] = React.useState(false);
    const [selected, setSelected] = React.useState(new Array(props.list.length).fill(false));
    const dropdownRef = useRef(null);

    useClickOutside(dropdownRef, () => {setActive(false)});

    const getAmountSelected = ()=>{
        let c = 0;
        for (let i = 0; i < selected.length; i++) {
            if(selected[i]) {
                c++
            }
        }
        return c;
    }

    const getSelected = (amt) => {
        let show = []
        for (let i = 0; i < selected.length; i++) {
            if(selected[i]) {
                show.push(props.list[i]);
                if(show.length >= amt){
                    return show.join(",");
                }
            }
        }
        return show.join(",");
    }

    return (
        <div className={styles.root} ref={dropdownRef}>
            <button
                type="button"
                className={styles.trigger}
                aria-expanded={active}
                onClick={()=>setActive(!active)}
            >

                <span className={styles.label}>{props.label}</span>
                <span className={styles.valueActive}>{getSelected(2)}{getAmountSelected()>2?` +${getAmountSelected()-2}`:""}</span>
                <span className={styles.caret}>{active ? "▲" : "▼"}</span>
            </button>

            {active && (
                <div className={styles.menu}>
                    {props.list.map((lang,index) => {
                        const isSelected = selected[index]
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
                </div>
            )}
        </div>
    );
}