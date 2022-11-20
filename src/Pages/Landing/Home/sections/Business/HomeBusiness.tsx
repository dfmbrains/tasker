import React from 'react';
import Billy from './img/Billy.png';
import './HomeBusiness.scss';
import Button from "../../../../../Components/Button";
import {NavLink} from "react-router-dom";

const HomeBusiness = () => {
    return (
        <div className="HomeBusiness">
            <div className="container">
                <div className="HomeBusiness__main">
                    <div className="HomeBusiness__main_left">
                        <h2>Хотите получить проверенных исполнителей для Вашего бизнеса?</h2>
                        <span>Или просто заработать деньги в интернете без вложений?</span>
                      <NavLink to={'/login'}>
                          <Button text={'Зарегистрироваться сейчас'} type={3}/>
                      </NavLink>
                    </div>
                    <div className="HomeBusiness__main_right">
                        <img src={Billy} alt="Billy Defense"/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeBusiness;