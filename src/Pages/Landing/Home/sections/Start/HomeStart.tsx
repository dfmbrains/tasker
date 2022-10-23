import React from 'react';
import './homeStart.scss';
import MoneyBag from './img/moneyBag.png';
import ActiveTasks from './img/activeTasks.png';
import Orders from './img/orders.png';
import DoTasks from './img/doTasks.png';
import Money from './img/money.png';
import Friends from './img/friends.png';
import Cup from './img/cup.png';
import StartBg from './img/homeStartBg.png';

const HomeStart = () => {
    return (
        <section className="homeStart">
            <div className="container">
                <div className="homeStart__cards">
                    <div className="homeStart__cards_item">
                        <div className="homeStart__cards_item-content">
                            <img src={MoneyBag} alt=""/>
                            <h5>1 520 500</h5>
                            <p>Выплачено денег</p>
                        </div>
                    </div>
                    <div className="homeStart__cards_item">
                        <div className="homeStart__cards_item-content">
                            <img src={ActiveTasks} alt=""/>
                            <h5>24 250</h5>
                            <p>Заказчиков</p>
                        </div>
                    </div>
                    <div className="homeStart__cards_item">
                        <div className="homeStart__cards_item-content">
                            <img src={Orders} alt=""/>
                            <h5>3 526</h5>
                            <p>Активных заданий</p>
                        </div>
                    </div>
                </div>
                <div className="homeStart__info">
                    <h2 className="homeStart__info_title">С чего начать</h2>
                    <div className="homeStart__info_row">
                        <div className="homeStart__info_item">
                            <div className="homeStart__info_item-img">
                                <img src={DoTasks} alt=""/>
                            </div>
                            <div className="homeStart__info_item-texts">
                                <h5>Выполняйте задания</h5>
                                <p>Выполняйте интересные задания от заказчиков в свободное для Вас время</p>
                            </div>
                        </div>
                        <div className="homeStart__info_item">
                            <div className="homeStart__info_item-img">
                                <img src={Money} alt=""/>
                            </div>
                            <div className="homeStart__info_item-texts">
                                <h5>Зарабатывайте деньги</h5>
                                <p>Получайте честно заработанные деньги сразу же после проверки задания</p>
                            </div>
                        </div>
                        <div className="homeStart__info_item">
                            <div className="homeStart__info_item-img">
                                <img src={Friends} alt=""/>
                            </div>
                            <div className="homeStart__info_item-texts">
                                <h5>Привлекайте друзей</h5>
                                <p>Зарабатывайте до 40% с каждого выполнения Вашего реферала</p>
                            </div>
                        </div>
                        <div className="homeStart__info_item">
                            <div className="homeStart__info_item-img">
                                <img src={Cup} alt=""/>
                            </div>
                            <div className="homeStart__info_item-texts">
                                <h5>Получите результат</h5>
                                <p>Тысячи надежных исполнителей готовы выполнить любое Ваше задание</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="homeStart__bg" src={StartBg} alt=""/>
        </section>
    );
};

export default HomeStart;