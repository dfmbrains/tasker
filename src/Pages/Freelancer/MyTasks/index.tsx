import React, {useState} from 'react';
import './tasks.scss';
import Button from "../../../Components/Button";
import MyTasksCard from "../../../Components/MyTasksCard";

const MyTasks = () => {
    const [nav, setNav] = useState(1)

    const switchNav = (type: number) => {
        switch (type) {
            case nav:
                return 'tasks__nav_active'
            default:
                return ''
        }
    }
    return (
        <main className="tasks">
            <div className="container">
                <h1 className="pageTitle">Мои задания</h1>
                <div className="tasks__nav">
                    <p onClick={() => setNav(1)}
                       className={switchNav(1)}>Все</p>
                    <p onClick={() => setNav(2)}
                       className={switchNav(2)}>В работе</p>
                    <p onClick={() => setNav(3)}
                       className={switchNav(3)}>Завершенные</p>
                    <p onClick={() => setNav(4)}
                       className={switchNav(4)}>Черновики</p>
                    <p onClick={() => setNav(5)}
                       className={switchNav(5)}>Остановленные</p>
                    <Button text={"Создать здание"} type={4}/>
                </div>
                <div className="tasks__list">
                    {Array.from(Array(5).keys()).map(el => (
                        <MyTasksCard/>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default MyTasks;