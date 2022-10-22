import React from 'react';
import MainListLayout from "../../../Components/MainListLayout";
import MarketPlaceAside from "../../../Components/MarketPlaceAside/MarketPlaceAside";
import {radioData1} from "../../../Utils/radioData";
import TaskCard from "../../../Components/TaskCard/TaskCard";
import './details.scss';
import Cost from "../../../Components/Cost";

const MarketPlaceDetails = () => {


    return (
        <MainListLayout tools={<h1 className="pageTitle">Предложить услугу</h1>}>
            <MarketPlaceAside data={radioData1} cities={false}/>
            <div className="MarketPlaceDetails">
                <TaskCard type={true} idx={0}/>
                <form>
                    <h2>Предложить услугу</h2>
                    <label className="MarketPlaceDetails__label">
                        <ul>
                            <li>Как вы будете решать задачу клиента</li>
                            <li>Опишите свой релевантный опыт. Расскажите про 1-3 ваших кейса по решению подобных задач.
                            </li>
                            <li>Укажите, как именно вы собираетесь выполнять это задание. Опишите ключевые моменты.</li>
                            <li>Составляйте уникальные отклики, которые покажут вашу компетентность и заинтересованность
                                в
                                проекте
                            </li>
                        </ul>
                        <textarea placeholder={'Напишите, как вы будете решать задачу клиента'}
                                  className="MarketPlaceDetails__input"/>
                        <div className="MarketPlaceDetails__offer">
                            <label>
                                <h2>Название заказа</h2>
                                <input placeholder="Введите название заказа" type="text"/>
                            </label>
                            <label>
                                <h2>Стоимость</h2>
                                <input placeholder="500 - 1000" type="text"/>
                            </label>
                        </div>
                        <label className="MarketPlaceDetails__submit">
                            <Cost/>
                            <button type={'submit'}>Предложить</button>
                        </label>
                    </label>
                </form>
            </div>
        </MainListLayout>
    );
};

export default MarketPlaceDetails;