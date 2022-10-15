import React from 'react';
import Billy from './img/Billy.png';
import './HomeBusiness.scss';
import Button from "../../../../Components/Button";

const HomeBusiness = () => {
    return (
        <div className="HomeBusiness">
            <div className="container">
                <div className="HomeBusiness__main">
                    <div className="HomeBusiness__main_left">
                        <h2>Хотите получить проверенных исполнителей для Вашего бизнеса?</h2>
                        <span>Или просто заработать деньги в интернете без вложений?</span>
                        <Button text={'Зарегистрироваться сейчас'} type={3}/>
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