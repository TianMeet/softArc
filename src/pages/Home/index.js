import style from "./index.module.css";
import Layout from "antd/es/layout/layout";
import NavHead from "../../components/navhead";
import Sidebar from "../../components/Sider";
import { Outlet } from "react-router-dom";
const { Content } = Layout;

const Home = () => {
    return (
        <>
            <NavHead />
            <div className={style.dis}>
                <Sidebar />
                <div className={style.content}>
                    <Outlet />
                </div>
            </div>
        </>
    );
};
export default Home;
