import React from 'react';
import './createTask.scss';
import Cost from "../../Components/Cost";
import Button from "../../Components/Button";

const CreateTask = () => {
    return (
        <main className="createTask">
            <div className="container">
                <h1 className="pageTitle">Создать задание</h1>
                <form>
                    <h2 className="createTask__title">Основное</h2>
                    <div className="createTask__part">
                        <h3>Название заказа</h3>
                        <input type="text" placeholder="Введите название"/>
                        <h3>Рубрика</h3>
                        <div className="createTask__part_row">
                            <select>
                                <option>Выберите рубрику</option>
                                <option>Выберите рубрику 2</option>
                                <option>Выберите рубрику 3</option>
                            </select>
                            <select>
                                <option>Трафик</option>
                                <option>Трафик 2</option>
                                <option>Трафик 3</option>
                            </select>
                        </div>
                        <h3>Обложка задания</h3>
                        <div className="createTask__file">
                            <h5>Загрузить обложку</h5>
                            <p>Минимальный размер: 660 х 440 px Вес: 30 кб — 10 Мб Форматы: jpg, jpeg, png</p>
                        </div>
                    </div>
                    <h2 className="createTask__title">Описание и файлы</h2>
                    <div className="createTask__part">
                        <h3>Что вы гарантируете</h3>
                        <textarea placeholder="Введите текст"></textarea>
                        <h3>Какаие материалы вам нужны от клиента</h3>
                        <textarea placeholder="Введите текст"></textarea>
                        <div className="createTask__row">
                            <input type="file" hidden={true}/>
                            <button>
                                <svg width="11" height="20" viewBox="0 0 11 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#2B96F1"
                                          d="M10.9527 14.4643C10.9527 17.4802 8.5073 19.9207 5.49639 19.9207C2.48548 19.9207 0.0400391 17.4802 0.0400391 14.4643L0.0400391 4.04764C0.0400391 1.85518 1.81583 0.0793839 4.00829 0.0793839C6.20075 0.0793839 7.97655 1.85518 7.97655 4.04764V12.4802C7.97655 13.8492 6.86544 14.9603 5.49639 14.9603C4.12734 14.9603 3.01623 13.8492 3.01623 12.4802L3.01623 5.0397H4.50432V12.4802C4.50432 13.0258 4.94579 13.4722 5.49639 13.4722C6.04698 13.4722 6.48845 13.0258 6.48845 12.4802V4.04764C6.48845 2.67859 5.37734 1.56748 4.00829 1.56748C2.63925 1.56748 1.52813 2.67859 1.52813 4.04764L1.52813 14.4643C1.52813 16.6568 3.30393 18.4326 5.49639 18.4326C7.68885 18.4326 9.46464 16.6568 9.46464 14.4643V5.0397H10.9527V14.4643Z"/>
                                </svg>
                                Прикрепить работы с портфолио
                            </button>
                            <p>До 10 файлов не более 100 мб</p>
                        </div>
                    </div>
                    <h2 className="createTask__title">Стоимость</h2>
                    <div className="createTask__part">
                        <div className="createTask__part_row">
                            <label>
                                <h3>Введите сумму</h3>
                                <input type="text" placeholder="Введите значение"/>
                            </label>
                            <label>
                                <h3>Время</h3>
                                <select>
                                    <option>2 дня</option>
                                    <option>3 дня</option>
                                    <option>4 дня</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="createTask__total">
                        <Cost/>
                        <Button text={"Продолжить"} type={4}/>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default CreateTask;