import React, {useState} from 'react';
import './statistics.scss';
import DatePicker from "../../Components/DatePicker";

const Statistics = () => {
    const [nav, setNav] = useState(1)

    const switchNav = (type: number) => {
        switch (type) {
            case nav:
                return '1.5px solid #2B96F1'
            default:
                return '1.5px solid transparent'
        }
    }

    const tableContentArr = ['ВЫПОЛНЕННЫЕ ЗАДАНИЯ', 'МОИ ЗАДАНИЯ', 'ПАРТН. ПРОГРАММА', 'Дата', 'КОЛИЧЕСТВО', 'Заработано', 'КОЛИЧЕСТВО', 'ПОТРАЧЕНО', 'РЕГИСТРАЦИЙ', 'ЗАРАБОТАНО', 'Баланс']
    return (
        <main className="statistics">
            <div className="container">
                <h1 className="pageTitle">Моя статистика</h1>
                <div className="statistics__content">
                    <div className="statistics__box statistics__values">
                        <div className="statistics__values_item">
                            <p className="statistics__values_item-blue">0.0/500</p>
                            <h4>Мой рейтиг</h4>
                        </div>
                        <div className="statistics__values_item">
                            <p className="statistics__values_item-green">0</p>
                            <h4>Мои выполнения</h4>
                        </div>
                        <div className="statistics__values_item">
                            <p className="statistics__values_item-light">0</p>
                            <h4>Выполнения моих заданий</h4>
                        </div>
                        <div className="statistics__values_item">
                            <p className="statistics__values_item-yellow">0</p>
                            <h4>Рефералы</h4>
                        </div>
                        <div className="statistics__values_item">
                            <p className="statistics__values_item-red">0</p>
                            <h4>Заработано</h4>
                        </div>
                    </div>
                    <div className="statistics__box statistics__table">
                        <h3 className="statistics__table_title">
                            <svg width="25" height="15" viewBox="0 0 25 15" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill="#555555"
                                      d="M2.77778 8.889H22.2222V6.11122H2.77778V8.889ZM0 14.4446H19.4444V11.6668H0V14.4446ZM5.55556 0.555664V3.33344H25V0.555664H5.55556Z"/>
                            </svg>
                            Моя статистика
                        </h3>
                        <div className="statistics__table_nav">
                            <p onClick={() => setNav(1)}
                               style={{borderBottom: `${switchNav(1)}`}}
                               className="statistics__table_nav-item">
                                Статус
                            </p>
                            <p onClick={() => setNav(2)}
                               style={{borderBottom: `${switchNav(2)}`}}
                               className="statistics__table_nav-item">
                                История
                            </p>
                            <p onClick={() => setNav(3)}
                               style={{borderBottom: `${switchNav(3)}`}}
                               className="statistics__table_nav-item">
                                Статистика партнерской программы
                            </p>
                        </div>
                        <div className="statistics__table_content">
                            <div className="statistics__table_content-tools">
                                <DatePicker/>
                                <button
                                    className="statistics__table_content-text statistics__table_content-tools-right">
                                    <svg width="22" height="24" viewBox="0 0 22 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#555555"
                                              d="M16.8454 10.7896H5.00829V13.1571H16.8454V10.7896ZM19.2128 2.50365H18.0291V0.13623H15.6617V2.50365H6.192V0.13623H3.82457V2.50365H2.64086C1.33286 2.50365 0.285275 3.56308 0.285275 4.87108L0.273438 21.443C0.273438 22.751 1.33286 23.8105 2.64086 23.8105H19.2128C20.5208 23.8105 21.5803 22.751 21.5803 21.443V4.87108C21.5803 3.56308 20.5208 2.50365 19.2128 2.50365ZM19.2128 21.443H2.64086V8.42221H19.2128V21.443ZM13.2943 15.5245H5.00829V17.8919H13.2943V15.5245Z"/>
                                    </svg>
                                    По дням
                                </button>
                            </div>
                            <div className="statistics__table_content-list">
                                {tableContentArr.slice(0, 3).map(b => (
                                    <button
                                        className="statistics__table_content-list-item statistics__table_content-text">
                                        {b}
                                    </button>
                                ))}
                            </div>
                            <div className="statistics__table_content-list">
                                {tableContentArr.slice(3).map(b => (
                                    <button
                                        className="statistics__table_content-list-item statistics__table_content-text">
                                        {b}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Statistics;