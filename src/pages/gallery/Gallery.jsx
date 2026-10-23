import React, {useEffect, useState} from 'react';
import styles from "./gallery.module.css";
import HtmlTitle from "@components/HtmlTitle.jsx";
import {Flex, Grid, Text} from "@radix-ui/themes";
import Nav from "@components/Nav.jsx";

function Gallery(props) {

    return (
        <>
        <Nav title={props.meta.navTitle} noCursor>
            <a href={props.meta.source}>source</a>
            <a href="/">home</a>
        </Nav>
        <div className={styles.page}>
            <HtmlTitle title={props.meta.title}/>
            <Grid container spacing={2}>
                {props.meta.images.map((image,index) => {
                    return (
                        <Flex>
                            <img src={image.src} alt={image.caption}/>
                        </Flex>
                    )
                })}
            </Grid>
        </div>
        </>
    );
}

export default Gallery;