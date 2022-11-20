import React, {useEffect, useRef} from "react";
import './header.scss'
import Logo from "../../Components/Logo";
import {Link, useLocation} from "react-router-dom";
import Button from "../../Components/Button";
import {useRecoilState} from "recoil";
import {headerHeightState} from "../../Store/States";

const Header = () => {

    const location = useLocation();

    const [headerHeight, setHeaderHeight] = useRecoilState(headerHeightState);

    const headerRef: any = useRef();

    useEffect(() => {
        setHeaderHeight(headerRef.current.clientHeight)
    }, []);

    return (
        <header ref={headerRef} className="header">
            <div className="container">
                <Link className="header__logo" to={"/"}>
                    <Logo props={1}/>
                </Link>
                {location.pathname.includes("login") || location.pathname.includes("signup")
                    ? ''
                    : <>
                        <nav className="header__nav">
                            <Link className="header__nav_link" to={"/"}>С чего начать</Link>
                            <Link className="header__nav_link" to={"/"}>Преимущества</Link>
                            <Link className="header__nav_link" to={"/"}>Партнерская программа</Link>
                            <Link className="header__nav_link" to={"/about"}>О нас</Link>
                        </nav>
                        <div className="header__buttons">
                            <Link to={"/login"}>
                                <Button text={"Войти"} type={1}/>
                            </Link>
                            <Link to={"signup"}>
                                <Button text={"Регистрация"} type={2}/>
                            </Link>
                        </div>
                    </>
                }
            </div>
        </header>
    );
};

export default Header;