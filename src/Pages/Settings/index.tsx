import React, {useState} from 'react';
import './settings.scss';
import FirstSettings from "./FirstSettings";
import SecondSettings from "./SecondSettings";
import ThirdSettings from "./ThirdSettings";

const UserSettings = () => {

    const [page, setPage] = useState(1)

    const switchSettings = (num: number) => {
        switch (num) {
            case 1:
                return <FirstSettings/>
            case 2:
                return <SecondSettings/>
            case 3:
                return <ThirdSettings/>
            default:
                return <FirstSettings/>
        }
    }

    const activeNav = (num: number) => {
        switch (num) {
            case page:
                return 'active'
            default:
                return ''
        }
    }

    return (
        <section className="Settings">
            <div className="container">
                <div className="Settings__main">
                    <h2 className="Settings__main_title">Настройки</h2>
                    <ul className="Settings__main_navbar">
                        <li className={`${activeNav(1)}`} onClick={() => setPage(1)}>Общие</li>
                        <li className={`${activeNav(2)}`} onClick={() => setPage(2)}>Профиль</li>
                        <li className={`${activeNav(3)}`} onClick={() => setPage(3)}>Финансы</li>
                    </ul>
                    <div className="Settings__main_container">
                        {switchSettings(page)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserSettings;