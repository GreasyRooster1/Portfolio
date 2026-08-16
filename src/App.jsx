// Portfolio homepage — option 7a "Full 2a layout in 3c ice blue on cool slate".
// Imported from the Claude Design doc "Portfolio Homepage".

import Nav from './components/Nav'
import Hero from './components/Hero'
import FeaturedHero from './FeaturedHero.jsx'
import SelectedWork from './SelectedWork'
import ProjectIndex from './ProjectIndex'
import Footer from './components/Footer'
import styles from './App.module.css'
import {useEffect, useState} from "react";
import projectData from '@assets/projects.json';

export default function App() {
    const [data, setData] = useState(projectData)

    useEffect(() => {
        fetch("https://portfolio-api.dillonjw.com/projects")
            .then((res) => {
                if(!res.ok) {
                    return;
                }
                res.json().then((d) => {
                    if(Object.keys(d).length === 0){
                        return;
                    }
                    setData(d)
                })
            })
    },[])
    return (
        <div className={styles.page}>
            <Nav />
            <Hero/>
            <FeaturedHero />
            <SelectedWork id="selected-work" projects={data.featured}/>
            <ProjectIndex id="project-index"  projects={data.list}/>
            <Footer />
        </div>
    )
}
