import HtmlTitle from "@components/HtmlTitle.jsx";
import Nav from "@components/Nav.jsx";
import ProjectTable from "@/pages/directory/ProjectTable.jsx";
import {useEffect, useState} from "react";
import SearchInput from "@/pages/directory/SearchInput.jsx";
import {Box,Text} from "@radix-ui/themes";
import styles from "./directory.module.css";


const LANG = ["js","html","css"]
const API = "http://0.0.0.0:8080"//"https://portfolio-api.dillonjw.com"


export function Directory() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const [search, setSearch] = useState(urlParams.get("search")??"");
    const [languages, setLanguages] = useState([])
    const [technologies, setTechnologies] = useState([])
    const [selectedLang, setSelectedLang] = useState(-1);
    const [selectedTech, setSelectedTech] = useState(-1);
    const [searchResults, setSearchResults] = useState(null)
    const [directoryData, setDirectoryData] = useState(null)
    const [searchNumber, setSearchNumber] = useState(null)

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const getSearchQuery = (search) => {
        let lang = selectedLang===-1?"NO_LANG_VIEW_ALL":languages[selectedLang].name
        let tech = selectedTech===-1?"NO_TECH_VIEW_ALL":technologies[selectedTech].name
        lang = lang.replace("#","%23")
        let searchQuery = search.toLowerCase();
        if(search.length<1) {
            searchQuery = "NO_QUERY_VIEW_ALL";
        }
        return `${API}/search_projects/${searchQuery}/${lang}/${tech}`
    }

    const onSearch = (override)=>{
        console.log(search)
        fetch(override?override:getSearchQuery(search), {})
            .then((res) => {
                if(!res.ok) {
                    console.log("search request failed")
                    return;
                }
                res.json().then((d) => {
                    let matches = d.matches;
                    matches.sort((a, b) => b.significance - a.significance);
                    console.log(matches)
                    d.matches = matches;
                    setSearchResults(d);
                    setSearchNumber(n=>n++)
                })
            })
    }

    useEffect(() => {
        if(!(urlParams.get("search")||urlParams.get("lang")||urlParams.get("tech"))){
            onSearch(`${API}/search_projects/${urlParams.get("search")??"NO_QUERY_VIEW_ALL"}/${urlParams.get("lang")??"NO_LANG_VIEW_ALL"}/${urlParams.get("tech")??"NO_TECH_VIEW_ALL"}`);
        }

        fetch(API+"/get_directory_data")
            .then((res) => {
                if(!res.ok) {
                    console.log("data request failed")
                    return;
                }
                res.json().then((d) => {
                    setDirectoryData(d);
                    let langs = d.tags.filter((t)=>t.tag_type==="language");
                    let techs = d.tags.filter((t)=>t.tag_type==="technology");
                    setLanguages(langs);
                    setTechnologies(techs);
                    if(urlParams.get("lang")!=="") {
                        setSelectedLang(langs.findIndex(tag => tag.name.toLowerCase() === urlParams.get("lang")?.toLowerCase()))
                    }
                    if(urlParams.get("tech")!=="") {
                        setSelectedTech(techs.findIndex(tag => tag.name.toLowerCase() === urlParams.get("tech")?.toLowerCase()))
                    }
                })
            })
    },[])


    useEffect(() => {
        console.log("tags changed",selectedLang,selectedTech)
        const url = new URL(window.location.href);
        url.searchParams.delete('lang');
        url.searchParams.delete('tech');
        window.history.replaceState(null, '', url.toString());
        onSearch();
    },[selectedLang,selectedTech])


    return (
        <>
            <Box className="page" p={{initial:"8px",sm:"16px",lg:"16px"}}>
                <HtmlTitle title={"Project Directory - Dillon Wilson - "}/>

                <Nav title="Project Directory" noCursor noSticky={true}>
                    <a href="https://github.com/GreasyRooster1">github</a>
                    <a href="/">home</a>
                </Nav>

                <SearchInput value={search}
                             changeHandle={handleSearchChange}
                             languages={languages}
                             technologies={technologies}
                             selectedLang={selectedLang}
                             setSelectedLang={setSelectedLang}
                             selectedTech={selectedTech}
                             setSelectedTech={setSelectedTech}
                             onSearch={onSearch}
                ></SearchInput>

                <Box className={styles.subTextContainer}>
                    <Text className={styles.subText}>{searchResults?.matches.length} results</Text>
                </Box>

                <ProjectTable projects={searchResults?searchResults.matches:[]} stamp={searchNumber} highlightLang={languages[selectedLang]} highlightTech={technologies[selectedTech]}>

                </ProjectTable>
            </Box>
        </>
    )
}