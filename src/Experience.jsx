import styles from "@/ProjectIndex.module.css";
import SectionHead from "@components/SectionHead.jsx";
import IndexRow from "@components/IndexRow.jsx";
import {BrickList, BrickListItem} from "@components/BrickList.jsx";
import {Flex, Text} from "@radix-ui/themes";
import rust from "@assets/langs/rustcrab.png"
import react from "@assets/langs/react.svg"
import ts from "@assets/langs/ts.jpg"
import js from "@assets/langs/js.png"
import html from "@assets/langs/html.png"
import java from "@assets/langs/java.png"
import c from "@assets/langs/c.png"
import csharp from "@assets/langs/csharp.png"
import python from "@assets/langs/python.png"
import swift from "@assets/langs/swift.svg"
import ruby from "@assets/langs/ruby.svg"
import css from "@assets/langs/css.svg"
import arduino from "@assets/langs/arduino.svg"

import aws from "@assets/langs/aws.png"
import cloudflare from "@assets/langs/cloudflare.png"
import docker from "@assets/langs/docker.webp"
import git from "@assets/langs/git.svg"
import github from "@assets/langs/github.webp"
import node from "@assets/langs/node.svg"
import ollama from "@assets/langs/ollama.png"
import postgres from "@assets/langs/postgres.svg"
import proxmox from "@assets/langs/proxmox.png"
import rpi from "@assets/langs/rpi.svg"
import firebase from "@assets/langs/firebase.png"
import vite from "@assets/langs/vite.svg"

export function Experience(props) {
    return (
        <section className={styles.section} {...props}>
            <SectionHead title="Experience" meta="what i've worked with "/>
            <Flex width={"100%"} align={"center"} justify={"center"} mb="4" mt="6">
                <Text width={"100%"} align="center" size="8" weight="bold">Languages</Text>
            </Flex>
            <BrickList cols={8}>
                <BrickListItem img={ruby} color={"#d92007"}/>
                <BrickListItem img={react} color={"#00d8ff"}/>
                <BrickListItem img={js} color={"#f0dc4e"}/>
                <BrickListItem img={ts} color={"#3178c6"}/>
                <BrickListItem img={html} color={"#e44d26"}/>
                <BrickListItem img={arduino} color={"#199aa0"}/>
                <BrickListItem img={c} color={"#00599c"}/>
                <BrickListItem img={csharp} color={"#953dac"}/>
                <BrickListItem img={python} color={"#ffcf42"}/>
                <BrickListItem img={java} color={"#f3931b"}/>
                <BrickListItem img={rust} color={"#dd3516"}/>
                <BrickListItem img={css} color={"#1c88c7"}/>
                <BrickListItem img={swift} color={"#fa5d2d"}/>
            </BrickList>
            <Flex width={"100%"} align={"center"} justify={"center"} mb="4" mt="6">
                <Text width={"100%"} align="center" size="8" weight="bold">Technologies</Text>
            </Flex>
            <BrickList cols={12}>
                <BrickListItem img={aws} color={"#d92007"}/>
                <BrickListItem img={cloudflare} color={"#d92007"}/>
                <BrickListItem img={docker} color={"#d92007"}/>
                <BrickListItem img={git} color={"#d92007"}/>
                <BrickListItem img={github} color={"#d92007"}/>
                <BrickListItem img={ollama} color={"#d92007"}/>
                <BrickListItem img={postgres} color={"#d92007"}/>
                <BrickListItem img={node} color={"#d92007"}/>
                <BrickListItem img={proxmox} color={"#d92007"}/>
                <BrickListItem img={rpi} color={"#d92007"}/>
                <BrickListItem img={firebase} color={"#d92007"}/>
                <BrickListItem img={vite} color={"#d92007"}/>

            </BrickList>

        </section>
    )
}