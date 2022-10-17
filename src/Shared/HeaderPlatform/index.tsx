import React from 'react';
import Logo from "../../Components/Logo";
import './headerPlatform.scss';
import SearchIcon from '../../Assets/icons/search.svg';
import Bell from '../../Assets/icons/bell.svg';
import {NavLink} from "react-router-dom";
import {useRecoilState} from "recoil";
import {profile} from "../../Store/States";
import Tenge from "../../Components/Tenge/Tenge";
import Button from "../../Components/Button";

const Index = () => {

    const [user] = useRecoilState(profile)

    return (
        <header className="headerPlatform">
            <div className="container">
                <div className="headerPlatform__main">
                    <Logo props={3}/>
                    <form id="searchForm" className="headerPlatform__search">
                        <label>
                            <img src={SearchIcon} alt="Search Icon"/>
                            <input placeholder={'Услугу, исполнителя'} type="text"/>
                        </label>
                        <div>
                            <Button text={"Найти"} type={4}/>
                        </div>
                    </form>
                    <nav className="headerPlatform__navbar">
                        <NavLink to={'/platform/marketplace'}>Биржа</NavLink>
                        <NavLink to={'/platform/vacancies'}>Вакансии</NavLink>
                        <NavLink to={'/platform/myTasks'}>Мои задачи</NavLink>
                        <NavLink to={'/platform/orders'}>Заказы</NavLink>
                        <NavLink to={'/platform/responses'}>Отклики</NavLink>
                        <NavLink to={'/platform/chat'}>Чат</NavLink>
                        <NavLink to={'/platform/notifications'}>
                            <img src={Bell} alt="bell"/>
                        </NavLink>
                        <NavLink className="headerPlatform__navbar_wallet" to={'/platform/wallet'}>
                            <span>2000</span><Tenge/>
                        </NavLink>
                        <NavLink to={'/platform/myProfile'}>
                            <div className="headerPlatform__main_avatarBorder">
                                {user ? <div className="img" style={{backgroundImage: `url(${user})`}}/>
                                    : <div className="avatarNone">E</div>
                                }
                            </div>
                        </NavLink>
                    </nav>
                </div>
            </div>
            <hr/>
            <div className="container">
                <nav className="headerPlatform__filters">
                    <a>Дизайн</a>
                    <a>Разработка и IT</a>
                    <a>Тексты и переводы</a>
                    <a>SEO и трафик</a>
                    <a>Соцсети и реклама</a>
                    <a>Аудио, видео съемка</a>
                    <a>Бизнес</a>
                    <a>Краткосрочные задачи</a>
                </nav>
            </div>
            <hr/>
        </header>
    );
};

export default Index;