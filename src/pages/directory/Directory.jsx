import HtmlTitle from "@components/HtmlTitle.jsx";
import Nav from "@components/Nav.jsx";
import ProjectTable from "@/pages/directory/ProjectTable.jsx";
import {useEffect, useState} from "react";
import SearchInput from "@/pages/directory/SearchInput.jsx";
import {Box} from "@radix-ui/themes";

const LANG = ["js","html","css"]
const API = "http://0.0.0.0:8080"//"https://portfolio-api.dillonjw.com"


export function Directory() {
    const [search, setSearch] = useState("")
    const [language, setLanguage] = useState("")
    const [technology, setTechnology] = useState("")
    const [selectedLang, setSelectedLang] = useState(new Array(LANG.length).fill(false));
    const [selectedTech, setSelectedTech] = useState(new Array(LANG.length).fill(false));
    const [searchResults, setSearchResults] = useState(null)
    const [directoryData, setDirectoryData] = useState(null)

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const onSearch = ()=>{
        if(search.length<1) return;
        fetch(API+"/search_projects/"+search)
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
                })
            })
    }

    useEffect(() => {
        fetch(API+"/get_directory_data")
            .then((res) => {
                if(!res.ok) {
                    console.log("data request failed")
                    return;
                }
                res.json().then((d) => {
                    setDirectoryData(d);
                })
            })
    },[])

    useEffect(() => {
        fetch(API+"/search_projects/NO_QUERY_VIEW_ALL")
            .then((res) => {
                if(!res.ok) {
                    console.log("data request failed")
                    return;
                }
                res.json().then((d) => {
                    setSearchResults(d);
                })
            })
    },[])

    return (
        <>
            <Box className="page" p={{initial:"8px",sm:"16px",lg:"16px"}}>
                <HtmlTitle title={"Project Directory - Dillon Wilson - "}/>

                <Nav title="Project Directory" noCursor>
                    <a href="https://github.com/GreasyRooster1">github</a>
                    <a href="/">home</a>
                </Nav>

                <SearchInput value={search}
                             changeHandle={handleSearchChange}
                             languages={LANG}
                             technologies={LANG}
                             selectedLang={selectedLang}
                             setSelectedLang={setSelectedLang}
                             selectedTech={selectedTech}
                             setSelectedTech={setSelectedTech}
                             onSearch={onSearch}
                ></SearchInput>

                <ProjectTable projects={searchResults?searchResults.matches:[]}>

                </ProjectTable>
            </Box>
        </>
    )
}