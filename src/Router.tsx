import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { Details } from "./pages/Details";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/details/:id" element={<Details />}/>
        </Routes>
    );
}