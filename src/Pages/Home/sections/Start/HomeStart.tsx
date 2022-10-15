import React from 'react';
import './homeStart.scss';
import MoneyBag from './img/moneyBag.png';
// import ActiveTasks from './img/activeTasks.png';
// import Orders from './img/orders.png';

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
                </div>
            </div>
        </section>
    );
};

export default HomeStart;