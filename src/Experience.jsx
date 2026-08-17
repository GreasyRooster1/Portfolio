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
import firebase from "@assets/langs/firebase2.png"
import vite from "@assets/langs/vite.svg"
import jetbrains from "@assets/langs/jetbrains.png"
import linux from "@assets/langs/linux.png"
import p5 from "@assets/langs/p5.svg"
import processing from "@assets/langs/processing.svg"
import vscode from "@assets/langs/vscode.svg"
import jwt from "@assets/langs/jwt.png"
import xcode from "@assets/langs/xcode.png"

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
                <BrickListItem img={aws} color={"#fd8d04"}/>
                <BrickListItem img={cloudflare} color={"#f38020"}/>
                <BrickListItem img={docker} color={"#0091e2"}/>
                <BrickListItem img={git} color={"#f05133"}/>
                <BrickListItem img={github} color={"#7e7e7e"}/>
                <BrickListItem img={ollama} color={"#ffffff"}/>
                <BrickListItem img={postgres} color={"#336791"}/>
                <BrickListItem img={node} color={"#58a545"}/>
                <BrickListItem img={proxmox} color={"#e57000"}/>
                <BrickListItem img={rpi} color={"#e81150"}/>
                <BrickListItem img={firebase} color={"#ff9100"}/>
                <BrickListItem img={vite} color={"#6c16ff"}/>
                <BrickListItem img={jetbrains} color={"#f6016c"}/>
                <BrickListItem img={linux} color={"#ffbe00"}/>
                <BrickListItem img={p5} color={"#ed225d"}/>
                <BrickListItem img={processing} color={"#0468ff"}/>
                <BrickListItem img={vscode} color={"#22a6f2"}/>
                <BrickListItem img={jwt} color={"#d63aff"}/>
                <BrickListItem img={xcode} color={"#0cc0fa"}/>
            </BrickList>

        </section>
    )
}