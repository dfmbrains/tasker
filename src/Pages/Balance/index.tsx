import React, {useState} from 'react';
import './balance.scss';
import Button from "../../Components/Button";
import DatePicker from "../../Components/DatePicker";

const Balance = () => {
    const [nav, setNav] = useState(1)

    const switchNav = (type: number) => {
        switch (type) {
            case nav:
                return 'balance__nav_active'
            default:
                return ''
        }
    }
    return (
        <main className="balance">
            <div className="container">
                <h1 className="pageTitle">Баланс</h1>
                <div className="balance__content">
                    <div className="balance__nav">
                        <p onClick={() => setNav(1)} className={switchNav(1)}>История</p>
                        <p onClick={() => setNav(2)} className={switchNav(2)}>Пополнить счет</p>
                        <p onClick={() => setNav(3)} className={switchNav(3)}>Вывод средств </p>
                    </div>
                    <div className="balance__box">
                        <p>
                            <svg width="50" height="42" viewBox="0 0 50 42" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill="#555555"
                                      d="M45.6667 0H4.56667C2.04358 0 0 2.06153 0 4.60677V32.2474C0 34.7927 2.04358 36.8542 4.56667 36.8542H15.9833V41.461H34.25V36.8542H45.6667C48.1898 36.8542 50.2105 34.7927 50.2105 32.2474L50.2333 4.60677C50.2333 2.06153 48.1898 0 45.6667 0ZM45.6667 32.2474H4.56667V4.60677H45.6667V32.2474ZM34.25 16.1237V20.7305H27.4V27.6406H22.8333V20.7305H15.9833V16.1237H22.8333V9.21355H27.4V16.1237H34.25Z"/>
                            </svg>
                            0.00 тг
                        </p>
                        <h5>Основной баланс</h5>
                        <Button text={"Пополнить"} type={4}/>
                    </div>
                    <div className="balance__table">
                        <h2 className="balance__title">
                            <svg width="21" height="25" viewBox="0 0 21 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill="#555555"
                                      d="M18 0H3C1.61875 0 0.5 1.11875 0.5 2.5V22.5C0.5 23.8813 1.61875 25 3 25H18C19.3813 25 20.5 23.8813 20.5 22.5V2.5C20.5 1.11875 19.3813 0 18 0ZM3 2.5H9.25V12.5L6.125 10.625L3 12.5V2.5Z"/>
                            </svg>
                            История
                        </h2>
                        <div className="balance__history_tools">
                            <DatePicker/>
                            <div className="balance__history_tools-right">
                                <select>
                                    <option value="">Любой тип</option>
                                    <option value="">Любой тип 2</option>
                                    <option value="">Любой тип 3</option>
                                </select>
                                <select>
                                    <option value="">Все операции</option>
                                    <option value="">Все операции 2</option>
                                    <option value="">Все операции 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="balance__history_head">
                            <h4>Дата</h4>
                            <h4>Тип</h4>
                            <h4>Опирация</h4>
                            <h4>Описание</h4>
                            <h4>Сумма</h4>
                        </div>
                    </div>
                    <div className="balance__table">

                    </div>
                </div>
            </div>
        </main>
    );
};

export default Balance;