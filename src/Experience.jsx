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

const projLink = (lang) => {
    return `https://github.com/GreasyRooster1?tab=repositories&q=&type=&language=${lang}&sort=`;
}

export function Experience(props) {
    return (
        <section className={styles.section} {...props}>
            <SectionHead title="Experience" meta="what i've worked with "/>
            <Flex width={"100%"} align={"center"} justify={"center"} mb="4" mt="6">
                <Text width={"100%"} align="center" size="8" weight="bold">Languages</Text>
            </Flex>
            <BrickList cols={8}>
                <BrickListItem img={ruby} color={"#d92007"} name={"Ruby"} links={[{txt:"Homepage",href:"https://www.ruby-lang.org/en/"}]}/>
                <BrickListItem img={react} color={"#00d8ff"} name={"React"} links={[{txt:"Homepage",href:"https://react.dev/"}]}/>
                <BrickListItem img={js} color={"#f0dc4e"} name={"JavaScript"} links={[{txt:"Projects",href:projLink("javascript")}]}/>
                <BrickListItem img={ts} color={"#3178c6"} name={"TypeScript"} links={[{txt:"Homepage",href:"https://www.typescriptlang.org/"},{txt:"Projects",href:projLink("typescript")}]}/>
                <BrickListItem img={html} color={"#e44d26"} name={"HTML"} links={[{txt:"Homepage",href:"https://html.spec.whatwg.org/"},{txt:"Projects",href:projLink("html")}]}/>
                <BrickListItem img={arduino} color={"#199aa0"} name={"Arduino"} links={[{txt:"Homepage",href:"https://arduino.org/"}]}/>
                <BrickListItem img={c} color={"#00599c"} name={"C"} links={[{txt:"Homepage",href:"https://www.c-language.org/"},{txt:"Projects",href:projLink("c")}]}/>
                <BrickListItem img={csharp} color={"#953dac"} name={"C Sharp"} links={[{txt:"Homepage",href:"https://learn.microsoft.com/en-us/dotnet/csharp/"},{txt:"Projects",href:projLink("c%23")}]}/>
                <BrickListItem img={python} color={"#ffcf42"} name={"Python"} links={[{txt:"Homepage",href:"https://www.python.org/"},{txt:"Projects",href:projLink("python")}]}/>
                <BrickListItem img={java} color={"#f3931b"} name={"Java"} links={[{txt:"Homepage",href:"https://www.java.com/"},{txt:"Projects",href:projLink("java")}]}/>
                <BrickListItem img={rust} color={"#dd3516"} name={"Rust"} links={[{txt:"Homepage",href:"https://rust-lang.org/"},{txt:"Projects",href:projLink("rust")}]}/>
                <BrickListItem img={css} color={"#1c88c7"} name={"CSS"} links={[{txt:"Projects",href:projLink("css")}]}/>
                <BrickListItem img={swift} color={"#fa5d2d"} name={"Swift"} links={[{txt:"Homepage",href:"https://www.swift.org/"}]}/>
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