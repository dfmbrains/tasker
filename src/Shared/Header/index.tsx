import React, {useEffect, useRef} from "react";
import './header.scss'
import Logo from "../../Components/Logo";
import {Link} from "react-router-dom";
import Button from "../../Components/Button";
import {useRecoilState} from "recoil";
import {headerHeightState} from "../../Store/States";

const Header = () => {
    const [headerHeight, setHeaderHeight] = useRecoilState(headerHeightState);
    const headerRef: any = useRef();
    useEffect(() => {
        setHeaderHeight(headerRef.current.clientHeight)
    }, []);

    return (
        <header ref={headerRef} className="header">
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
                    <Button text={"Войти"} type={1}/>
                    <Button text={"Регистрация"} type={2}/>
                </div>
            </div>
        </header>
    );
};

export default Header;