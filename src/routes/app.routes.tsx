import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { DefaultPage } from "../pages/defaultPage";


export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}>
                <Route path="*" element={<DefaultPage/>}/>
            </Route>
        </Routes>
    )
};