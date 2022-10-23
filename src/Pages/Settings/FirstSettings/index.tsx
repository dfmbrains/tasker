import React from 'react';
import './firstSettings.scss';
import Button from "../../../Components/Button";
import Question from '../../../Assets/icons/question.svg';

const FirstSettings = () => {
    return (
        <div className="FirstSettings">
            <h3>Адрес публичной страницы вашего профиля: <a
                href="https://kwork.ru/user/sashaadk12">https://kwork.ru/user/sashaadk12</a></h3>
            <div className="labelsRow">
                <label>
                    <h2>Логин</h2>
                    <input type="text"/>
                </label>
                <label>
                    <h2>Email</h2>
                    <input type="email"/>
                </label>
            </div>
            <div className="labelsRow">
                <label>
                    <h2>Новый пароль</h2>
                    <input type="password"/>
                </label>
                <label>
                    <h2>Повтроите пароль еще раз</h2>
                    <input type="password"/>
                </label>
            </div>
            <div className="buttonRow">
                <Button text={'Сохранить'} type={4}/>
                <span className="numberPhone">Привязать номер телефона
                <img src={Question} alt="question"/>
                </span>
                <span className="deleteAccount">
                    Удалить аккаунт
                </span>
            </div>
        </div>
    );
};

export default FirstSettings;