import React, {useEffect, useState} from 'react';
import Nav from "@/pages/index/Nav.jsx";
import Hero from "@/pages/index/Hero.jsx";
import FeaturedHero from "@/pages/index/FeaturedHero.jsx";
import SelectedWork from "@/pages/index/SelectedWork.jsx";
import ProjectIndex from "@/pages/index/ProjectIndex.jsx";
import {Experience} from "@/Experience.jsx";
import Footer from "@/pages/index/Footer.jsx";
import projectData from '@assets/projects.json';
import HtmlTitle from "@components/HtmlTitle.jsx";
import styles from {}

function Index(props) {
    const [data, setData] = useState(projectData)

    useEffect(() => {
        fetch("https://portfolio-api.dillonjw.com/projects")
            .then((res) => {
                if(!res.ok) {
                    return;
                }
                res.json().then((d) => {
                    if(Object.keys(d).length === 0){
                        console.warn("no server data found")
                        return;
                    }
                    setData(d)
                })
            })
    },[])
    return (
        <>
            <div className="page">
                <HtmlTitle/>

                <Nav />
                <Hero/>
                <FeaturedHero />
                <SelectedWork id="selected-work" projects={data.featured}/>
                <ProjectIndex id="project-index"  projects={data.list}/>
                <Experience id="experience"/>
                <Footer />
            </div>
        </>
    )
}

export default Index;