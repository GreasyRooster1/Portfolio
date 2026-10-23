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
            <Grid container spacing={"2"} gap={"4"} columns={"2"}>
                {props.meta.images.map((image,index) => {
                    return (
                        <Flex direction="column" key={index} className={styles.imageContainer}>
                            <img src={image.src} alt={image.caption} className={styles.image}/>
                            <Text m={"2"} align={"start"} size={"4"}><Text weight={"bold"}>Fig {index+1}.</Text> {image.caption}</Text>
                        </Flex>
                    )
                })}
            </Grid>
        </div>
        </>
    );
}

export default Gallery;