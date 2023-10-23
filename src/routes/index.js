import { Routes, Route } from "react-router-dom";
import Duixiang from "../components/Duixiang";
import Guandao from "../components/Guandao";
import Shijian from "../components/Shijian";
import Zhuzi from "../components/Zhuzi";
import Home from "../pages/Home";
const BaseRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}>
                <Route path='zhuzi' element={<Zhuzi />}></Route>
                <Route path='duixiang' element={<Duixiang />}></Route>
                <Route path='shijian' element={<Shijian />}></Route>
                <Route path='guandao' element={<Guandao />}></Route>
            </Route>
        </Routes>
    );
};

export default BaseRouter;
