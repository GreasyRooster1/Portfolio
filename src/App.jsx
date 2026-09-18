import {Route, Routes} from "react-router-dom";
import Index from "@/pages/index/Index.jsx";
import QCodeProjects from "@/pages/qcodeProjects/QCodeProjects.jsx";
import WriteUp from "@/pages/writeup/WriteUp.jsx";

import qcode_md from "@/writeUpData/qcode.md?raw"
import qcode_meta from "@/writeUpData/qcode.json"

export default function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Index/>} />
            <Route exact path="/qcode_writeup" element={<WriteUp md={qcode_md} meta={qcode_meta}/>} />
            <Route exact path="/qcode_projects" element={<QCodeProjects/>} />
        </Routes>
    )
}
