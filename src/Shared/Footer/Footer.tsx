import React from 'react';
import './footer.scss';
import Logo from "../../Components/Logo";
import Inst from './icons/instagram.png';
import Teleg from './icons/Telegram.png';
import Face from './icons/facebook.png';

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="container">
                <div className="Footer__main">
                    <div className="Footer__main_up">
                        <Logo props={2}/>
                        <ul>
                            <li>С чего начать</li>
                            <li>Преимущества</li>
                            <li>Заработок в интернете</li>
                            <li>Партнерская программа</li>
                            <li>О нас</li>
                        </ul>
                        <ul>
                            <img src={Face} alt=""/>
                            <img src={Inst} alt=""/>
                            <img src={Teleg} alt=""/>
                        </ul>
                    </div>
                    <hr/>
                    <div className="Footer__main_down">
                        <h2>Все права защищены © 2018-2019 TASKER</h2>
                        <ul>
                            <li>Не допусстимые к размещению задачи</li>
                            <li>Правила модерации</li>
                            <li>Принцип работы</li>
                            <li>Правила сервиса</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;