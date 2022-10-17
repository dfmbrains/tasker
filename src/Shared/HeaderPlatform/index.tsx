import React from 'react';
import Logo from "../../Components/Logo";
import './headerPlatform.scss';
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import {Link} from "react-router-dom";
import Search from '../../Assets/icons/search.svg';

const HeaderPlatform = () => {
    return (
        <header className="headerPlatform">
            <div className="container">
                <div className="headerPlatform__left">
                    <Logo props={3}/>
                    <form className="headerPlatform__search">
                        <img className="headerPlatform__search_icon" src={Search} alt=""/>
                        <label>
                            <Input placeholder={"Услугу, исполнителя"}/>
                        </label>
                        <div className="headerPlatform__search_btn">
                            <Button text={"Найти"} type={4}/>
                        </div>
                    </form>
                </div>
                <div className="headerPlatform__right">
                    <nav className="headerPlatform__nav">
                        <Link className="headerPlatform__nav_item" to={"/app"}>Мои заказы</Link>
                        <Link className="headerPlatform__nav_item" to={"/app"}>Биржа</Link>
                        <Link className="headerPlatform__nav_item" to={"/app"}>Избранные</Link>
                        <Link className="headerPlatform__nav_item" to={"/app"}>Заказы</Link>
                        <p className="headerPlatform__nav_item">
                            Отклики
                            <button className="headerPlatform__more">
                                <svg width="10" height="8" viewBox="0 0 14 8" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.65083 0L7 4.94673L12.3492 0L14 1.52664L7 8L0 1.52664L1.65083 0Z"
                                          fill="#555555"/>
                                </svg>
                            </button>
                        </p>
                        <Link className="headerPlatform__nav_item" to={"/app"}>Чат</Link>
                    </nav>
                    <button className="headerPlatform__notification">
                        <svg width="20" height="22" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.13137 22.631C9.13137 23.9405 10.1909 25 11.5004 25C12.8099 25 13.8695 23.9405 13.8695 22.631H9.13137ZM19.6909 17.6429V10.7143C19.6909 6.84524 17.0123 3.60714 13.3933 2.75V1.89286C13.3933 0.845238 12.548 0 11.5004 0C10.4528 0 9.60756 0.845238 9.60756 1.89286V2.75C5.98851 3.60714 3.30994 6.84524 3.30994 10.7143V17.6429L0.786133 20.1667V21.4286H22.2147V20.1667L19.6909 17.6429Z"
                                fill="#BFBFBF"/>
                        </svg>
                    </button>
                    <button className="headerPlatform__yellowButton">
                        2000
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.844 4.638H0V3H7.578V4.638H4.734V11.838H2.844V4.638Z" fill="white"/>
                            <path d="M2.844 1.638H0V0H7.578V1.638H4.734H2.844Z" fill="white"/>
                        </svg>
                    </button>
                    <div className="headerPlatform__profile">
                        <div className="headerPlatform__profile_ava">S</div>
                        <button className="headerPlatform__more">
                            <svg width="10" height="8" viewBox="0 0 14 8" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.65083 0L7 4.94673L12.3492 0L14 1.52664L7 8L0 1.52664L1.65083 0Z"
                                      fill="#555555"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderPlatform;