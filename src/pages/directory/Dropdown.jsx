import styles from "./dropdown.module.css";
import React, {useRef} from "react";
import MenuItem from "@/pages/directory/MenuItem.jsx";
import Marker from "@/pages/directory/Marker.jsx";
import {useClickOutside} from "@/pages/directory/useClickOutside.js";

export default function Dropdown(props) {
    const [active, setActive] = React.useState(false);
    const dropdownRef = useRef(null);

    useClickOutside(dropdownRef, () => {setActive(false)});

    const getAmountSelected = ()=>{
        let c = 0;
        for (let i = 0; i < props.selected.length; i++) {
            if(props.selected[i]) {
                c++
            }
        }
        return c;
    }

    const getSelected = (amt) => {
        let show = []
        for (let i = 0; i < props.selected.length; i++) {
            if(props.selected[i]) {
                show.push(props.list[i].name);
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
                <span className={styles.valueActive}>{getSelected(props.showAmt)}{getAmountSelected()>props.showAmt?` +${getAmountSelected()-props.showAmt}`:""}</span>
                <span className={styles.caret}>{active ? "▲" : "▼"}</span>
            </button>

            {active && (
                <div className={styles.menu}>
                    {props.list.map((lang,index) => {
                        const isSelected = props.selected===index
                        return (
                            <MenuItem
                                key={index}
                                selected={isSelected}
                                onClick={() => {
                                    console.log(props.selected);
                                    if(isSelected) {
                                        props.setSelected(-1);
                                    }else {
                                        props.setSelected(index);
                                    }
                                }}
                                marker={<Marker checked={isSelected} />}
                                trailing={""}
                            >
                                {lang.full_name}
                            </MenuItem>
                        );
                    })}
                </div>
            )}
        </div>
    );
}