import React from 'react';
import './secondSettings.scss';
import photoChange from "../../../Assets/icons/PhotoChange.svg";

const SettingsSecond = () => {
    return (
        <div className="SecondSettings">
            <div className="SecondSettings__avatar">
                <div className="SecondSettings__avatar_img" style={{backgroundImage: `url(${1 ? 'red' : ''})`}}>
                    E
                    <div className="SecondSettings__avatar_img-change">
                        <img src={photoChange} alt=""/>
                    </div>
                </div>

                <label>
                    <h2>Информация о вас</h2>
                    <textarea/>
                </label>
            </div>
            <div className="labelsRow">
                <label>
                    <h2>Имя</h2>
                    <input type="text"/>
                </label>
                <label>
                    <h2>Вы по специальности</h2>
                    <input type="email"/>
                </label>
            </div>
            <div className="labelsRow">
                <label>
                    <h2>Страна</h2>
                    <input type="text"/>
                </label>
                <label>
                    <h2>Город (по желанию)</h2>
                    <input type="email"/>
                </label>
            </div>
            <div className="labelsRow">
                <label>
                    <h2>Вид договора</h2>
                    <select>
                        <option value=""></option>
                    </select>
                </label>
            </div>
        </div>
    );
};

export default SettingsSecond;