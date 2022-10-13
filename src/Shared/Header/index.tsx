import React from "react";
import './header.scss'
import Logo from "../../Components/Logo";
import {Link} from "react-router-dom";
import Button from "../../Components/Button";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Logo/>
                <nav className="header__nav">
                    <Link className="header__nav_link" to={"/"}>С чего начать</Link>
                    <Link className="header__nav_link" to={"/"}>Преимущества</Link>
                    <Link className="header__nav_link" to={"/"}>Заработок в интернете</Link>
                    <Link className="header__nav_link" to={"/"}>Партнерская программа</Link>
                    <Link className="header__nav_link" to={"/"}>О нас</Link>
                </nav>
                <div className="header__buttons">
                    <Button text={"Войти"} type={true}/>
                    <Button text={"Регистрация"} type={false}/>
                </div>
            </div>
        </header>
    );
};

export default Header;