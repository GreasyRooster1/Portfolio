import React, {useEffect, useState} from 'react';
import {DesktopView} from "@components/View.jsx";
import styles from "./writeUp.module.css";
import {Flex} from "@radix-ui/themes";

function Menu(props) {
    const [fragment, setFragment] = useState(window.location.hash);

    useEffect(() => {
        const handleHashChange = () => {
            setFragment(window.location.hash.replace('#', ''));
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <DesktopView>
            <div className={styles.menuWrapper}>
                <Flex direction="column" gapY="2" className={styles.menu}>
                    {props.titles.map((title, index) => (
                        <a key={index} className={`${styles.menuItem} ${fragment===title.id?styles.selected:""}`} href={`#${title.id}`}>{title.name}</a>
                    ))}
                </Flex>
            </div>
        </DesktopView>
    );
}

export default Menu;