import React from 'react';
import './signLayout.scss';
import {NavLink, Outlet} from "react-router-dom";
import LayoutImg from '../../Assets/img/metaImg.png';

const SignLayout = () => {
    return (
        <main className="signLayout">
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
        </main>
    );
};

export default SignLayout;