import {Route, Routes} from "react-router-dom";
import Index from "@/pages/index/Index.jsx";
import WriteUp from "@/pages/writeup/WriteUp.jsx";

import qcode_md from "@assets/writeup_qcode.md?raw"
import qcode_meta from "@assets/writeup_qcode.json"

export default function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Index/>} />
            <Route exact path="/writeup" element={<WriteUp md={qcode_md} meta={qcode_meta}/>} />
        </Routes>
    )
}
