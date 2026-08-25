import {Route, Routes} from "react-router-dom";
import Index from "@/pages/index/Index.jsx";

export default function App() {
    return (
        <Routes>
            <Route exact path="/" component={Index} />
        </Routes>
    )
}
