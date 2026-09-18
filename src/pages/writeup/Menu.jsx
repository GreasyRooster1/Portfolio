import React from 'react';
import {DesktopView} from "@components/View.jsx";
import styles from "./writeUp.module.css";
import {Flex} from "@radix-ui/themes";

function Menu(props) {
    return (
        <DesktopView>
            <div className={styles.menuWrapper}>
                <Flex direction="column" gapY="2" className={styles.menu}>
                    {props.titles.map((title, index) => (
                        <a key={index} className={styles.menuItem} href={`#${title.id}`}>{title.name}</a>
                    ))}
                </Flex>
            </div>
        </DesktopView>
    );
}

export default Menu;