import {Route, Routes} from "react-router-dom";
import Index from "@/pages/index/Index.jsx";
import QCodeProjects from "@/pages/qcodeProjects/QCodeProjects.jsx";

export default function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Index/>} />
            <Route exact path="/qcode_projects" element={<QCodeProjects/>} />
        </Routes>
    )
}
