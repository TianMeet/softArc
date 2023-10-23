import { Button } from "antd";
import { useState } from "react";
import style from "./index.module.css";
const Duixiang = () => {
    const [activeTab, setActiveTab] = useState("原理图");

    return (
        <div>
            <header className={style.head}>
                面向对象软件体系结构风格相关操作
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
                            src='https://cdn.jsdelivr.net/gh/TianMeet/blog-img/20191222103103145.png'
                            alt=''
                        />
                    </div>
                )}
                {activeTab === "文字说明" && (
                    <div className={style.show}>
                        面向对象软件体系结构风格 定义：
                        面向对象软件体系结构风格是一种基于面向对象编程原则的软件体系结构设计方法。在这种风格中，软件系统被组织成一组相互关联的对象，这些对象通过消息传递进行通信和协作，从而实现系统的整体功能。
                        特征和原则：封装：
                        面向对象软件体系结构强调封装性，每个对象都包含自己的状态和行为，并对外部隐藏其内部实现的细节。这种封装有助于降低系统的耦合度，提高模块的独立性。
                        继承：
                        继承是面向对象编程的核心概念之一，它在软件体系结构中被广泛应用。通过继承，对象可以从其他对象继承属性和行为，从而实现代码的重用和扩展。
                        多态：
                        多态性使得不同对象可以响应相同的消息，但可能以不同的方式进行处理。这提高了系统的灵活性，允许对象根据上下文采取不同的行为。
                        抽象：
                        抽象是面向对象软件体系结构中的关键概念，它允许开发人员从具体的实现中提取共性，形成抽象的类和接口。抽象有助于理清系统的结构，提高代码的可理解性。
                        消息传递：
                        面向对象系统中的对象之间通过消息传递进行通信。对象通过发送和接收消息来调用彼此的方法，从而实现协作和完成任务。
                    </div>
                )}
                {activeTab === "源程序代码结构" && (
                    <div>
                        <img
                            src='https://cdn.jsdelivr.net/gh/TianMeet/blog-img/%E6%88%AA%E5%B1%8F2023-10-23%2015.54.27.png'
                            alt=''
                        />
                    </div>
                )}
                {activeTab === "关键函数的程序代码" && (
                    <div>关键函数的程序代码内容 </div>
                )}
            </div>
        </div>
    );
};
export default Duixiang;
