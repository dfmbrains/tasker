import React from 'react';
import './MarketAside.scss';

const MarketPlaceAside = () => {
    return (
        <aside className="MarketAside">
            <h2 className="MarketAside__price">Цена</h2>
            <label className="MarketAside__fromTo">
                <input placeholder="От" type="number"/>
                <span>-</span>
                <input placeholder="До" type="number"/>
            </label>
            <div className="MarketAside__time">
                <h2>Время</h2>
                <label>
                    <input name="time" type="radio"/>
                    <span>Менее часа</span>
                </label>
                <label>
                    <input name="time" type="radio"/>
                    <span>От 1 часа - 3 часов</span>
                </label>
                <label>
                    <input name="time" type="radio"/>
                    <span>От 4 часов - 10 часов</span>
                </label>
                <label>
                    <input name="time" type="radio"/>
                    <span>От 10-24 часов</span>
                </label>
                <label>
                    <input name="time" type="radio"/>
                    <span>До 1 дня</span>
                </label>
                <label>
                    <input name="time" type="radio"/>
                    <span>До 2 дней</span>
                </label>
                <label>
                    <input name="time" type="radio"/>
                    <span>До 5 дней</span>
                </label>
                <label>
                    <input name="time" type="radio"/>
                    <span>До 10 дней</span>
                </label>
            </div>
            <div className="MarketAside__format">
                <h2>Задания</h2>
                <label>
                    <input name="format" value="offline" type="radio"/>
                    <span>Оффлайн</span>
                </label>
                <label>
                    <input name="format" value="online" type="radio"/>
                    <span>Онлайн</span>
                </label>
            </div>
        </aside>
    );
};

export default MarketPlaceAside;