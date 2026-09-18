import React from 'react';
import {DesktopView} from "@components/View.jsx";
import styles from "./writeUp.module.css";
import {Flex} from "@radix-ui/themes";

function Menu(props) {
    return (
        <DesktopView>
            <div className={styles.menuWrapper}>
                <Flex direction="column" gapY="2" className={styles.menu}>
                    <span className={styles.menuItem}>Item</span>
                    <span className={styles.menuItem}>Item</span>
                    <span className={styles.menuItem}>Item</span>
                    <span className={styles.menuItem}>Item</span>
                </Flex>
            </div>
        </DesktopView>
    );
}

export default Menu;