import {Route, Routes} from "react-router-dom";
import Index from "@/pages/index/Index.jsx";
import WriteUp from "@/pages/writeup/WriteUp.jsx";

export default function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Index/>} />
            <Route exact path="/writeup" element={<WriteUp content={}/>} />
        </Routes>
    )
}
