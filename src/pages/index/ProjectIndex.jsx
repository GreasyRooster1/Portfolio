import SectionHead from '@components/SectionHead.jsx'
import IndexRow from '@/pages/index/IndexRow.jsx'
import styles from './ProjectIndex.module.css'
import LinkRow from "@components/LinkRow.jsx";
import PageSection from "@components/PageSection.jsx";
import {DesktopView} from "@components/View.jsx";
import {useEffect, useState} from "react";
import {API} from "@/constants.js";

export default function ProjectIndex(props) {
    const [count, setCount] = useState(108);

    useEffect(() => {

        fetch(API+"/get_directory_data")
            .then((res) => {
                if(!res.ok) {
                    console.log("data request failed")
                    return;
                }
                res.json().then((d) => {
                    if(d) {
                        setCount(d.total_projects)
                    }
                })
            })
    },[])

  return (
      <DesktopView>
        <PageSection id="index" {...props}>
          <SectionHead title="More projects" meta={<a style={{textDecoration:"underline"}} href={"/directory"}>View all here</a>} />
          <div className={styles.header}>
            <div>№</div>
            <div>project</div>
            <div>stack</div>
            <div>result</div>
            <div className={styles.linksHead}>links</div>
          </div>
          {props.projects.map((project, i) => (
            <IndexRow key={project.n} {...project} last={i === props.projects.length - 1} />
          ))}
        <a className={styles.moreContainer} href="/directory">
            <span className={styles.moreText}>View all {count} projects...</span>
        </a>
        </PageSection>
      </DesktopView>
  )
}
