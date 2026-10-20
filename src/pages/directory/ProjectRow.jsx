import LinkRow from '@components/LinkRow.jsx'
import styles from './ProjectRow.module.css'
import {Box,Text} from "@radix-ui/themes";
import {Tag} from "@/pages/directory/Tag.jsx";
import {useEffect} from "react";

export default function ProjectRow(props) {

    let otherLinks = props.projectData.writeup||props.projectData.gallery||props.projectData.other_link_url;

    let rawLinkData = [
        props.projectData.writeup?{label:"writeup",href:props.projectData.writeup,accent:true}:undefined,
        props.projectData.gallery?{label:"gallery",href:props.projectData.gallery,accent:true}:undefined,
        props.projectData.other_link_url?{label:props.projectData.other_link_name,href:props.projectData.other_link_url,accent:true}:undefined,
        props.projectData.source?{label:otherLinks?"src":"source",href:props.projectData.source,accent:false}:undefined,
    ]

    let linkData = rawLinkData.filter(item => item !== undefined);

    let languageTags = props.projectData.tags.filter(tag => tag.tag_type==="language");
    let technologyTags = props.projectData.tags.filter(tag => tag.tag_type==="technology");

    if(props.highlightLang){
        let filtered = languageTags.filter(tag => tag.name!==props.highlightLang.name)
        if(filtered.length<languageTags.length) {
            languageTags = filtered;
            languageTags.unshift(props.highlightLang)
        }
    }

    if(props.highlightTech){
        let filtered = technologyTags.filter(tag => tag.name!==props.highlightTech.name)
        if(filtered.length<languageTags.length) {
            technologyTags = filtered;
            technologyTags.unshift(props.highlightTech)
        }
    }


    console.log(languageTags);

    return (
    <Box className={`${styles.row} ${props.last ? styles.rowLast : ''}`}>
      <div>
        <div className={styles.title}>{props.projectData.name}</div>
        <Box className={styles.sub} maxWidth={{initial:"320px",lg:"700px"}}>
            {props.projectData.desc}
        </Box>
      </div>
      <div className={styles.lang}>
          {languageTags.slice(0,3).map(tag => (
              <Tag key={tag.name} tagClass={`${tag.color.replace("#","")}`} {...tag}/>
          ))}
          {languageTags.length>3?(<Text ml={"1"} size={"2"}>{`+${languageTags.length-3}`}</Text>):""}
      </div>
      <div className={styles.tech}>
          {technologyTags.slice(0,2).map(tag => (
              <Tag key={tag.name} tagClass={`${tag.color.replace("#","")}`} {...tag}/>
          ))}
          {technologyTags.length>2?(<Text ml={"1"} size={"2"}>{`+${technologyTags.length-2}`}</Text>):""}
      </div>
      <LinkRow links={linkData} separated className={styles.links} />
    </Box>
    )
}
