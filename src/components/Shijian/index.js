import { Button } from "antd";
import { useState } from "react";
import style from "./index.module.css";
const Shijian = () => {
    const [activeTab, setActiveTab] = useState("原理图");

    return (
        <div>
            <header className={style.head}>
                事件系统软件体系结构风格相关操作
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
                            src='https://cdn.jsdelivr.net/gh/TianMeet/blog-img/%E6%88%AA%E5%B1%8F2023-10-23%2015.36.12.png'
                            alt=''
                        />
                    </div>
                )}
                {activeTab === "文字说明" && (
                    <div className={style.show}>
                        事件系统软件体系结构风格 定义：
                        事件系统软件体系结构风格是一种基于事件驱动编程模型的软件体系结构设计方法。在这种风格中，软件系统的各个组件之间通过事件进行通信和协作，从而实现系统的功能和业务逻辑。
                        特征和原则： 事件驱动：
                        事件系统体系结构的核心概念是事件。组件可以产生事件（事件生产者），而其他组件则监听和响应这些事件（事件消费者）。这种事件驱动的模型使系统能够实时响应外部的变化和用户操作。
                        松耦合：
                        事件系统通过事件的发布和订阅机制实现组件之间的松耦合。组件不直接调用彼此的方法，而是通过事件进行沟通。这样的设计使得系统更加灵活和可维护。
                        异步通信：
                        事件系统通常采用异步通信模型，允许组件在不同的时间和速度处理事件。这种异步性有助于提高系统的响应性和性能。
                        可扩展性：
                        通过事件系统，新的组件可以相对容易地集成到系统中。组件只需要遵循事件的发布和订阅协议，而不需要知道其他组件的详细实现。
                        分布式系统：
                        事件系统适用于分布式系统，因为它允许不同的组件分布在网络中的不同节点上，通过事件进行通信，而不受物理位置的限制。
                    </div>
                )}
                {activeTab === "源程序代码结构" && (
                    <div>
                        <img
                            src='https://cdn.jsdelivr.net/gh/TianMeet/blog-img/%E6%88%AA%E5%B1%8F2023-10-23%2015.59.50.png'
                            alt=''
                        />{" "}
                    </div>
                )}
                {activeTab === "关键函数的程序代码" && (
                    <div>关键函数的程序代码内容 </div>
                )}
                {activeTab === "处理输入文件" && (
                    <div>
                        <div>结果如下：</div>
                        <img
                            src='https://cdn.jsdelivr.net/gh/TianMeet/blog-img/%E6%88%AA%E5%B1%8F2023-10-23%2019.33.12.png'
                            alt=''
                        />{" "}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Shijian;
