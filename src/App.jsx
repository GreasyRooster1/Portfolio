// Portfolio homepage — option 7a "Full 2a layout in 3c ice blue on cool slate".
// Imported from the Claude Design doc "Portfolio Homepage".

import Nav from './components/Nav'
import Hero from './components/Hero'
import FeaturedHero from './FeaturedHero.jsx'
import SelectedWork from './SelectedWork'
import ProjectIndex from './ProjectIndex'
import About from './components/About'
import Footer from './components/Footer'
import styles from './App.module.css'
import {useEffect, useState} from "react";

export default function App() {
    const [totalProjects, setTotalProjects] = useState(2523)

    useEffect(() => {
        fetch("https://portfolio-api.dillonjw.com/projects")
            .then((data) => {
                data.json().then((dataJson) => {
                    setTotalLines(dataJson)
                })
            })
    },[])
    return (
        <div className={styles.page}>
            <Nav />
            <Hero/>
            <FeaturedHero />
            <SelectedWork />
            <ProjectIndex />
            <About />
            <Footer />
        </div>
    )
}
