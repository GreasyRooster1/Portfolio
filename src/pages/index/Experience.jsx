import styles from "@/pages/index/ProjectIndex.module.css";
import SectionHead from "@components/SectionHead.jsx";
import IndexRow from "@/pages/index/IndexRow.jsx";
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
import asm from "@assets/langs/asm.png"
import css from "@assets/langs/css.svg"
import arduino from "@assets/langs/arduino.svg"

import aws from "@assets/langs/aws.png"
import cloudflare from "@assets/langs/cloudflare.png"
import docker from "@assets/langs/docker.png"
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
import opengl from "@assets/langs/opengl.png"
import wgpu from "@assets/langs/wgpu.png"
import x86 from "@assets/langs/x86.png"
import PageSection from "@components/PageSection.jsx";
import {DesktopView} from "@components/View.jsx";

const langProjLink = (lang) => {
    return `directory?lang=${lang}`;
}
const techProjLink = (tech) => {
    return `directory?tech=${tech}`;
}

export function Experience(props) {
    return (
        <DesktopView>
        <PageSection {...props}>
            <SectionHead title="Experience" meta="hover to view projects"/>
            <Flex width={"100%"} align={"center"} justify={"center"} mb="4" mt="6">
                <Text width={"100%"} align="center" size="8" weight="bold">Languages</Text>
            </Flex>
            <BrickList cols={8}>
                <BrickListItem img={asm} color={"#32fd46"} name={"Assembly"} links={[{txt:"Info",href:"https://en.wikipedia.org/wiki/Assembly_language"},{txt:"Projects",href:langProjLink("asm")}]}/>
                <BrickListItem img={react} color={"#00d8ff"} name={"React"} links={[{txt:"Homepage",href:"https://react.dev/"},{txt:"Projects",href:langProjLink("react")}]}/>
                <BrickListItem img={js} color={"#f0dc4e"} name={"JavaScript"} links={[{txt:"Info",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{txt:"Projects",href:langProjLink("js")}]}/>
                <BrickListItem img={ts} color={"#3178c6"} name={"TypeScript"} links={[{txt:"Homepage",href:"https://www.typescriptlang.org/"},{txt:"Projects",href:langProjLink("ts")}]}/>
                <BrickListItem img={html} color={"#e44d26"} name={"HTML"} links={[{txt:"Homepage",href:"https://html.spec.whatwg.org/"},{txt:"Projects",href:langProjLink("html")}]}/>
                <BrickListItem img={arduino} color={"#199aa0"} name={"Arduino"} links={[{txt:"Homepage",href:"https://arduino.org/"},{txt:"Projects",href:langProjLink("arduino")}]}/>
                <BrickListItem img={c} color={"#00599c"} name={"C"} links={[{txt:"Homepage",href:"https://www.c-language.org/"},{txt:"Projects",href:langProjLink("c")}]}/>
                <BrickListItem img={csharp} color={"#953dac"} name={"C Sharp"} links={[{txt:"Homepage",href:"https://learn.microsoft.com/en-us/dotnet/csharp/"},{txt:"Projects",href:langProjLink("c%23")}]}/>
                <BrickListItem img={python} color={"#ffcf42"} name={"Python"} links={[{txt:"Homepage",href:"https://www.python.org/"},{txt:"Projects",href:langProjLink("python")}]}/>
                <BrickListItem img={java} color={"#f3931b"} name={"Java"} links={[{txt:"Homepage",href:"https://www.java.com/"},{txt:"Projects",href:langProjLink("java")}]}/>
                <BrickListItem img={rust} color={"#dd3516"} name={"Rust"} links={[{txt:"Homepage",href:"https://rust-lang.org/"},{txt:"Projects",href:langProjLink("rust")}]}/>
                <BrickListItem img={css} color={"#1c88c7"} name={"CSS"} links={[{txt:"Info",href:"https://developer.mozilla.org/en-US/docs/Web/CSS"},{txt:"Projects",href:langProjLink("css")}]}/>
                <BrickListItem img={swift} color={"#fa5d2d"} name={"Swift"} links={[{txt:"Homepage",href:"https://www.swift.org/"},{txt:"Projects",href:langProjLink("swift")}]}/>
            </BrickList>
            <Flex width={"100%"} align={"center"} justify={"center"} mb="4" mt="6">
                <Text width={"100%"} align="center" size="8" weight="bold">Technologies</Text>
            </Flex>
            <BrickList cols={11}>
                <BrickListItem img={aws} color={"#fd8d04"} name={"AWS"} links={[{txt:"Homepage",href:"https://aws.amazon.com/?nc2=h_home"},{txt:"Projects",href:techProjLink("aws")}]}/>
                <BrickListItem img={cloudflare} color={"#f38020"} name={"Cloudflare"} links={[{txt:"Homepage",href:"https://www.cloudflare.com/"},{txt:"Projects",href:techProjLink("cloudflare")}]}/>
                <BrickListItem img={docker} color={"#0091e2"} name={"Docker"} links={[{txt:"Homepage",href:"https://www.docker.com/"}]}/>
                <BrickListItem img={git} color={"#f05133"} name={"Git"} links={[{txt:"Homepage",href:"https://git-scm.com/e"}]}/>
                <BrickListItem img={github} color={"#7e7e7e"} name={"Github"} links={[{txt:"Homepage",href:"https://github.com"}]}/>
                <BrickListItem img={ollama} color={"#ffffff"} name={"Ollama"} links={[{txt:"Homepage",href:"https://ollama.com/"},{txt:"Projects",href:techProjLink("ollama")}]}/>
                <BrickListItem img={postgres} color={"#336791"} name={"PostgreSQL"} links={[{txt:"Homepage",href:"https://www.postgresql.org/"},{txt:"Projects",href:techProjLink("postgres")}]}/>
                <BrickListItem img={node} color={"#58a545"} name={"Node.js"} links={[{txt:"Homepage",href:"https://nodejs.org/"}]}/>
                <BrickListItem img={opengl} color={"#5586a4"} name={"OpenGL"} links={[{txt:"Homepage",href:"https://www.opengl.org/"}]}/>
                <BrickListItem img={proxmox} color={"#e57000"} name={"Proxmox VE"} links={[{txt:"Homepage",href:"https://www.proxmox.com/"},{txt:"Projects",href:techProjLink("proxmox")}]}/>
                <BrickListItem img={rpi} color={"#e81150"} name={"Raspberry PI"} links={[{txt:"Homepage",href:"https://www.raspberrypi.com/"},{txt:"Projects",href:techProjLink("rasp%2E pi")}]}/>
                <BrickListItem img={firebase} color={"#ff9100"} name={"Firebase"} links={[{txt:"Homepage",href:"https://firebase.google.com/"},{txt:"Projects",href:techProjLink("firebase")}]}/>
                <BrickListItem img={wgpu} color={"#8dd7f5"} name={"wgpu"} links={[{txt:"Homepage",href:"https://wgpu.rs/"}]}/>
                <BrickListItem img={x86} color={"#777777"} name={"x86"} links={[{txt:"Homepage",href:"https://en.wikipedia.org/wiki/X86"}]}/>
                <BrickListItem img={vite} color={"#6c16ff"} name={"Vite"} links={[{txt:"Homepage",href:"https://vite.dev/"},{txt:"Projects",href:techProjLink("vite")}]}/>
                <BrickListItem img={jetbrains} color={"#f6016c"} name={"JetBrains IDEs"} links={[{txt:"Homepage",href:"https://www.jetbrains.com/"}]}/>
                <BrickListItem img={linux} color={"#ffbe00"} name={"Linux"} links={[{txt:"Info",href:"https://en.wikipedia.org/wiki/Linux"}]}/>
                <BrickListItem img={p5} color={"#ed225d"} name={"p5.js"} links={[{txt:"Homepage",href:"https://p5js.org/"},{txt:"Projects",href:techProjLink("p5js")}]}/>
                <BrickListItem img={processing} color={"#0468ff"} name={"Processing"} links={[{txt:"Homepage",href:"https://processing.org/"},{txt:"Projects",href:techProjLink("processing")}]}/>
                <BrickListItem img={vscode} color={"#22a6f2"} name={"VS Code"} links={[{txt:"Homepage",href:"https://code.visualstudio.com/"}]}/>
                <BrickListItem img={jwt} color={"#d63aff"} name={"JWT"} links={[{txt:"Homepage",href:"https://www.jwt.io/"},{txt:"Projects",href:techProjLink("jwt")}]}/>
                <BrickListItem img={xcode} color={"#0cc0fa"} name={"X Code"} links={[{txt:"Homepage",href:"https://developer.apple.com/xcode/"}]}/>
            {/*Open Router*/}
            {/*Oracle Cloud*/}
            </BrickList>

        </PageSection>
        </DesktopView>
    )
}