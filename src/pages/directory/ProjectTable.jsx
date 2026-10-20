import SectionHead from '@components/SectionHead.jsx'
import IndexRow from '@/pages/index/IndexRow.jsx'
import styles from './ProjectTable.module.css'
import LinkRow from "@components/LinkRow.jsx";
import PageSection from "@components/PageSection.jsx";
import {DesktopView} from "@components/View.jsx";
import ProjectRow from "@/pages/directory/ProjectRow.jsx";
import {Box, Flex} from "@radix-ui/themes";
import { motion, AnimatePresence } from "motion/react";

export default function ProjectTable(props) {

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: .1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
      <div className={styles.parent}>
          <div className={styles.header}>
            <div>project</div>
            <Flex justify={"start"}>language</Flex>
            <Flex justify={"end"}>technologies</Flex>
            <div className={styles.linksHead}>links</div>
          </div>
          <AnimatePresence>

                  {props.projects.map((project, i) => (
                      <motion.div
                          key={i+props.stamp}
                          variants={itemVariants}
                          initial={{ opacity: 0, x:-50 }}
                          animate={{ opacity: 1, x:0 }}
                          exit={{ opacity: 0, x: 50 }}
                          transition={{ duration: 0.25}}
                      >
                         <ProjectRow key={i} projectData={project} last={i === props.projects.length - 1} highlightTech={props.highlightTech} highlightLang={props.highlightLang}/>
                      </motion.div>
                  ))}
          </AnimatePresence>
      </div>
    )
}
