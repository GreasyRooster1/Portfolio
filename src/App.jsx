import {Route, Routes} from "react-router-dom";
import Index from "@/pages/index/Index.jsx";
import QCodeProjects from "@/pages/qcodeProjects/QCodeProjects.jsx";
import WriteUp from "@/pages/writeup/WriteUp.jsx";

import qcode_md from "@/writeUpData/qcode.md?raw"
import qcode_meta from "@/writeUpData/qcode.json"
import weekend_raytracing_meta from "@/writeUpData/weekendRaytracing.json"
import {Directory} from "@/pages/directory/Directory.jsx";
import Gallery from "@/pages/gallery/Gallery.jsx";

export default function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Index/>} />
            <Route exact path="/directory" element={<Directory/>} />

            <Route exact path="/qcode_writeup" element={<WriteUp md={qcode_md} meta={qcode_meta}/>} />
            <Route exact path="/qcode_projects" element={<QCodeProjects/>} />

            <Route exact path="/raytracer_gallery" element={<Gallery meta={weekend_raytracing_meta}/>} />
        </Routes>
    )
}
