import React from 'react';
import './employerTypesModal.scss';

const EmployerTypesModal = () => {
    return (
        <div className="employerTypesModal">
            <input type="text"/>
            <div className="employerTypesModal__scroll">
                <div className="employerTypesModal__list">
                    <div className="employerTypesModal__list_item">
                        <label className="employerTypesModal__list_item-main">
                            <input type="checkbox"/>
                            Автомобильный бизнес
                        </label>
                        <div className="employerTypesModal__list_item-others">
                            <label>
                                <input type="checkbox"/>
                                Автозапчасти, шины
                            </label>
                            <label>
                                <input type="checkbox"/>
                                Автоконпомненты
                            </label>
                            <label>
                                <input type="checkbox"/>
                                Розничная торговля
                            </label>
                            <label>
                                <input type="checkbox"/>
                                Техническое ослуживание
                            </label>
                            <label>
                                <input type="checkbox"/>
                                Финансовые услуги
                            </label>
                        </div>
                    </div>
                    <div className="employerTypesModal__list_item">
                        <label className="employerTypesModal__list_item-main">
                            <input type="checkbox"/>
                            Гостиницы, рестораны, общепитт
                        </label>
                        <div className="employerTypesModal__list_item-others">
                            <label>
                                <input type="checkbox"/>
                                Автозапчасти, шины
                            </label>
                            <label>
                                <input type="checkbox"/>
                                Автоконпомненты
                            </label>
                            <label>
                                <input type="checkbox"/>
                                Розничная торговля
                            </label>
                            <label>
                                <input type="checkbox"/>
                                Техническое ослуживание
                            </label>
                            <label>
                                <input type="checkbox"/>
                                Финансовые услуги
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployerTypesModal;