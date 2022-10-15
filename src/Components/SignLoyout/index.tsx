import React from 'react';
import './signLayout.scss';
import {NavLink, Outlet} from "react-router-dom";
import LayoutImg from './img/signLayoutImg.png';

const SignLayout = () => {
    return (
        <section className="signLayout">
            <div className="container">
                <div className="signLayout__content">
                    <nav className="signLayout__nav">
                        <NavLink to="/login">Вход</NavLink>
                        <NavLink to="/signup">Регистрация</NavLink>
                    </nav>
                    <Outlet/>
                </div>
                <div className="signLayout__img">
                    <img src={LayoutImg} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default SignLayout;