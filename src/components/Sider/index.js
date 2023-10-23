import { Layout, theme } from "antd";
import { Link } from "react-router-dom";
import style from "./index.module.css";

const Sidebar = () => {
    return (
        <aside className={style.aside}>
            <Link to={"/zhuzi"}>主程序-子程序</Link>
            <Link to={"/duixiang"}>面向对象</Link>
            <Link to={"/shijian"}>事件系统</Link>
            <Link to={"/guandao"}>管道-过滤器</Link>
        </aside>
    );
};
export default Sidebar;
