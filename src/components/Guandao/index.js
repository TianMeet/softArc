import { useState } from "react";
import style from "./index.module.css";
import { Button } from "antd";
const Guandao = () => {
    const [activeTab, setActiveTab] = useState("原理图");

    return (
        <div>
            <header className={style.head}>
                管道-过滤器软件体系结构风格相关操作
            </header>
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
                        <img
                            src='https://cdn.jsdelivr.net/gh/TianMeet/blog-img/guandao.png'
                            alt=''
                        />
                    </div>
                )}
                {activeTab === "文字说明" && (
                    <div className={style.show}>
                        管道-过滤器软件体系结构风格 定义：
                        管道-过滤器软件体系结构风格是一种基于模块化设计原则的软件体系结构方法。在这种风格中，系统被组织成一系列相互独立的过滤器模块，这些过滤器通过管道进行连接，形成一个数据流的处理链。
                        特征和原则： 模块化设计：
                        系统被划分为一组相互独立的过滤器模块，每个模块负责特定的功能或任务。这种模块化设计使得系统更易于理解、测试和维护。
                        数据流：
                        过滤器之间通过管道进行数据传递。每个过滤器负责处理输入数据，并将处理结果传递给下一个过滤器。这种数据流的方式使系统的处理过程清晰可见。
                        松耦合：
                        过滤器之间的连接是松耦合的，它们通过标准的接口进行通信。这种松耦合性使得过滤器可以独立开发和测试，同时也方便了系统的扩展和修改。
                        可重用性：
                        过滤器是相对独立的功能单元，可以在不同的上下文中被重复使用。这种可重用性有助于提高开发效率和代码的复用率。
                        并行性：
                        由于过滤器之间是独立的，这种体系结构天生支持并行处理。多个过滤器可以并行执行，提高系统的性能。
                    </div>
                )}
                {activeTab === "源程序代码结构" && (
                    <div>
                        <img
                            src='https://cdn.jsdelivr.net/gh/TianMeet/blog-img/%E6%88%AA%E5%B1%8F2023-10-23%2015.51.37.png'
                            alt=''
                        />{" "}
                    </div>
                )}
                {activeTab === "关键函数的程序代码" && (
                    <div>管道-过滤器关键函数的程序代码内容 </div>
                )}
            </div>
        </div>
    );
};
export default Guandao;
