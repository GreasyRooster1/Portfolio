import HtmlTitle from "@components/HtmlTitle.jsx";
import Nav from "@components/Nav.jsx";
import ProjectTable from "@/pages/directory/ProjectTable.jsx";
import {useEffect, useState} from "react";
import directoryData from '@assets/directory.json';
import SearchInput from "@/pages/directory/SearchInput.jsx";

export function Directory() {
    const [data, setData] = useState(directoryData)
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("https://portfolio-api.dillonjw.com/directory")
            .then((res) => {
                if(!res.ok) {
                    console.log("directory request failed")
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
                <HtmlTitle title={"Project Directory - Dillon Wilson - "}/>

                <Nav title="Project Directory" noCursor>
                    <a href="https://github.com/GreasyRooster1">github</a>
                    <a href="/">home</a>
                </Nav>

                <SearchInput value={search} setValue={setSearch}></SearchInput>

                <ProjectTable projects={data.projects}>

                </ProjectTable>
            </div>
        </>
    )
}