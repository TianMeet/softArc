import { Button } from "antd";
import React, { useState } from "react";
import style from "./index.module.css";

const Zhuzi = () => {
    const [activeTab, setActiveTab] = useState("原理图");

    return (
        <div>
            <header className={style.head}>主程序-子程序相关操作</header>
            <div className={style.flex}>
                <Button
                    size='large'
                    type='primary'
                    onClick={() => setActiveTab("原理图")}
                    className={activeTab === "原理图" ? style.active : ""}
                >
                    原理图
                </Button>
                <Button
                    size='large'
                    type='primary'
                    onClick={() => setActiveTab("文字说明")}
                    className={activeTab === "文字说明" ? style.active : ""}
                >
                    文字说明
                </Button>
                <Button
                    size='large'
                    type='primary'
                    onClick={() => setActiveTab("源程序代码结构")}
                    className={
                        activeTab === "源程序代码结构" ? style.active : ""
                    }
                >
                    源程序代码结构
                </Button>
                <Button
                    size='large'
                    type='primary'
                    onClick={() => setActiveTab("关键函数的程序代码")}
                    className={
                        activeTab === "关键函数的程序代码" ? style.active : ""
                    }
                >
                    关键函数的程序代码
                </Button>
                <Button
                    size='large'
                    type='primary'
                    onClick={() => setActiveTab("处理输入文件")}
                    className={activeTab === "处理输入文件" ? style.active : ""}
                >
                    处理输入文件
                </Button>
            </div>

            <div className={style.mid}>
                {activeTab === "原理图" && (
                    <div>
                        {" "}
                        <div>
                            <img
                                src='https://cdn.jsdelivr.net/gh/TianMeet/blog-img/%E6%88%AA%E5%B1%8F2023-10-23%2015.40.57.png'
                                alt=''
                            />
                        </div>
                    </div>
                )}
                {activeTab === "文字说明" && (
                    <div className={style.show}>
                        主程序-子程序软件体系风格 定义：
                        主程序-子程序软件体系风格是一种基于分层结构的软件体系结构，其中系统的整体功能被划分为主程序和若干个子程序。主程序负责协调和控制整个系统的执行流程，而子程序则负责实现具体的功能模块。
                        特征和原则： 分层结构：
                        系统被划分为层次结构，主程序位于顶层，而各个子程序位于下层。这种分层结构有助于提高系统的可维护性和可扩展性。
                        模块化设计：
                        每个子程序都是一个相对独立的模块，负责执行特定的功能。这种模块化设计使得系统更易于理解、测试和维护。
                        清晰的接口定义：
                        主程序和子程序之间通过清晰定义的接口进行通信。这种接口定义有助于降低模块之间的耦合度，使得系统更具灵活性。
                        分工合作：
                        主程序和子程序分工明确，主程序负责整体协调和控制，而子程序负责具体功能的实现。这种分工合作有助于团队协作和并行开发。
                    </div>
                )}
                {activeTab === "源程序代码结构" && (
                    <div>
                        <img
                            src='https://cdn.jsdelivr.net/gh/TianMeet/blog-img/%E6%88%AA%E5%B1%8F2023-10-23%2015.56.47.png'
                            alt=''
                        />{" "}
                    </div>
                )}
                {activeTab === "关键函数的程序代码" && (
                    <div>关键函数的程序代码内容 </div>
                )}
            </div>
        </div>
    );
};

export default Zhuzi;
