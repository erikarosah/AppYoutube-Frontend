import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import { DefaultPage } from "../pages/DefaultPage";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { SendVideo } from "../pages/SendVideos";
import { MyVideos } from "../pages/MyVideos";

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}>
                <Route path="*" element={<DefaultPage/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/send-video" element={<SendVideo/>}/>
            <Route path="/my-videos" element={<MyVideos/>}/>
        </Routes>
    )
};