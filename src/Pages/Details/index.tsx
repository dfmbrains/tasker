import React from 'react';
import './details.scss';
import ContactImg from './img/contactImg.png';
import DetailsImg from './img/detailsImg.png';
import Button from "../../Components/Button";

const Details = () => {
    return (
        <main className="details">
            <div className="container">
                <h1 className="pageTitle">Уникальный логотип. Разработка логотипа</h1>
                <div className="details__row">
                    <div className="details__contact">
                        <div className="details__contact_top">
                            <div className="details__contact_img">
                                <img src={ContactImg} alt=""/>
                            </div>
                            <h3 className="details__contact_subtitle">Dedvoid</h3>
                        </div>
                        <div className="details__contact_info">
                            <div className="details__contact_info-item">
                                <span className="details__bold">Репутация:</span>
                                <span>
                                    <svg width="101" height="20" viewBox="0 0 101 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"><path
                                        d="M3.56712 7.90983L7.02832 7.90983C7.89477 7.90983 8.66268 7.35191 8.93043 6.52786L10 3.23607L11.0696 6.52786C11.3373 7.35191 12.1052 7.90983 12.9717 7.90983H16.4329L13.6327 9.94427C12.9317 10.4536 12.6384 11.3563 12.9062 12.1803L13.9757 15.4721L11.1756 13.4377C10.4746 12.9284 9.5254 12.9284 8.82443 13.4377L6.02426 15.4721L7.09383 12.1803C7.36158 11.3563 7.06826 10.4536 6.36729 9.94427L3.56712 7.90983ZM3.56712 7.90983V6.90983L3.56712 7.90983L2.97933 8.71885L3.56712 7.90983Z"
                                        fill="#FFB800" stroke="#FFB800" strokeWidth="2"/><path
                                        d="M24.5671 7.90983L28.0283 7.90983C28.8948 7.90983 29.6627 7.35191 29.9304 6.52786L31 3.23607L32.0696 6.52786C32.3373 7.35191 33.1052 7.90983 33.9717 7.90983H37.4329L34.6327 9.94427C33.9317 10.4536 33.6384 11.3563 33.9062 12.1803L34.9757 15.4721L32.1756 13.4377C31.4746 12.9284 30.5254 12.9284 29.8244 13.4377L27.0243 15.4721L28.0938 12.1803C28.3616 11.3563 28.0683 10.4536 27.3673 9.94427L24.5671 7.90983ZM24.5671 7.90983V6.90983L24.5671 7.90983L23.9793 8.71885L24.5671 7.90983Z"
                                        fill="#FFB800" stroke="#FFB800" strokeWidth="2"/><path
                                        d="M44.5671 7.90983L48.0283 7.90983C48.8948 7.90983 49.6627 7.35191 49.9304 6.52786L51 3.23607L52.0696 6.52786C52.3373 7.35191 53.1052 7.90983 53.9717 7.90983H57.4329L54.6327 9.94427C53.9317 10.4536 53.6384 11.3563 53.9062 12.1803L54.9757 15.4721L52.1756 13.4377C51.4746 12.9284 50.5254 12.9284 49.8244 13.4377L47.0243 15.4721L48.0938 12.1803C48.3616 11.3563 48.0683 10.4536 47.3673 9.94427L44.5671 7.90983ZM44.5671 7.90983V6.90983L44.5671 7.90983L43.9793 8.71885L44.5671 7.90983Z"
                                        fill="#FFB800" stroke="#FFB800" strokeWidth="2"/><path
                                        d="M64.5671 7.90983L68.0283 7.90983C68.8948 7.90983 69.6627 7.35191 69.9304 6.52786L71 3.23607L72.0696 6.52786C72.3373 7.35191 73.1052 7.90983 73.9717 7.90983H77.4329L74.6327 9.94427C73.9317 10.4536 73.6384 11.3563 73.9062 12.1803L74.9757 15.4721L72.1756 13.4377C71.4746 12.9284 70.5254 12.9284 69.8244 13.4377L67.0243 15.4721L68.0938 12.1803C68.3616 11.3563 68.0683 10.4536 67.3673 9.94427L64.5671 7.90983ZM64.5671 7.90983V6.90983L64.5671 7.90983L63.9793 8.71885L64.5671 7.90983Z"
                                        fill="#FFB800" stroke="#FFB800" strokeWidth="2"/><path
                                        d="M84.5671 7.90983L88.0283 7.90983C88.8948 7.90983 89.6627 7.35191 89.9304 6.52786L91 3.23607L92.0696 6.52786C92.3373 7.35191 93.1052 7.90983 93.9717 7.90983H97.4329L94.6327 9.94427C93.9317 10.4536 93.6384 11.3563 93.9062 12.1803L94.9757 15.4721L92.1756 13.4377C91.4746 12.9284 90.5254 12.9284 89.8244 13.4377L87.0243 15.4721L88.0938 12.1803C88.3616 11.3563 88.0683 10.4536 87.3673 9.94427L84.5671 7.90983ZM84.5671 7.90983V6.90983L84.5671 7.90983L83.9793 8.71885L84.5671 7.90983Z"
                                        fill="#FFB800" stroke="#FFB800" strokeWidth="2"/>
                                </svg>
                            </span>
                            </div>
                            <span className="details__bold">Выполнено заказов:</span>
                            <span className="details__light"> 152</span>
                            <br/>
                            <span className="details__bold">Город:</span>
                            <span className="details__light"> Алматы</span>
                        </div>
                        <div className="details__button">
                            <Button type={5} text={"Связаться с продавцом"}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_18_1573)">
                                        <path
                                            d="M17.5003 4.99996H15.8337V12.5H5.00033V14.1666C5.00033 14.625 5.37533 15 5.83366 15H15.0003L18.3337 18.3333V5.83329C18.3337 5.37496 17.9587 4.99996 17.5003 4.99996ZM14.167 9.99996V2.49996C14.167 2.04163 13.792 1.66663 13.3337 1.66663H2.50033C2.04199 1.66663 1.66699 2.04163 1.66699 2.49996V14.1666L5.00033 10.8333H13.3337C13.792 10.8333 14.167 10.4583 14.167 9.99996Z"
                                            fill="#FFB800"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_18_1573">
                                            <rect width="20" height="20" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Button>
                        </div>
                    </div>
                    <div className="details__description">
                        <img className="details__description_img" src={DetailsImg} alt=""/>
                        <h2 className="details__description_title">Описание задачи</h2>
                        <p className="details__bold">Разработаю дизайн логотипа, который разорвёт Ваших
                            конкурентов!</p>
                        <p className="details__bold">Хочешь привлечь внимание и создать запоминающийся образ
                            бренда?</p>
                        <br/>
                        <p className="details__light">Тогда тебе необходим <span
                            className="details__bold">уникальный логотип</span>, ведь это –
                            инвестиции в успех проекта!</p>
                        <br/>
                        <p className="details__light">Без качественной «упаковки» вашего бизнеса Вы не
                            сможете выделиться среди конкурентов и завоевать лояльность вашей аудитории</p>
                        <p className="details__bold">Гарантии:</p>
                        <p className="details__bold">• Разработка логотипа до полного утверждения</p>
                        <p className="details__bold">• Бесплатные правки и корректировки</p>
                        <p className="details__bold">• Всегда на связи 24/7</p>
                        <p className="details__bold">• Только уникальный и креативный логотип</p>
                        <p className="details__bold">• 100% результат, реально!</p>
                        <br/>
                        <p className="details__bold">Что Вы получаете в итоге:</p>
                        <p className="details__light">После утверждения логотипа, Вы получаете исходники в
                            векторном и растровом формате: (EPS, AI, PDF, PNG, SVG, JPG)</p>
                        <br/>
                        <p className="details__bold">Разработаю дизайн логотипа твоей мечты!</p>
                        <p className="details__bold">Напиши мне, "хочу дизайн логотипа" и я с радостью
                            возьмусь за Ваш заказ</p>
                        <br/>
                        <p className="details__bold">Нужно для заказа:</p>
                        <p className="details__bold">• Название</p>
                        <p className="details__light">( Какое текстовое содержание должно быть в логотипе
                            )</p>
                        <p className="details__bold">• Слоган</p>
                        <p className="details__light">( Подпись под логотипом описывающая род деятельности
                            Вашей компании )</p>
                        <p className="details__bold">• Основные услуги компании</p>
                        <p className="details__light">( Перечислите основные услуги, которые предоставляет
                            Ваша компания )</p>
                        <p className="details__bold">• Стилистика логотипа</p>
                        <p className="details__light">( Строгий, шуточный, детский, агрессивный, спортивный
                            )</p>
                        <p className="details__bold">• Графические элементы</p>
                        <p className="details__light">( Дом, машина, животное, человек )</p>
                        <p className="details__bold">• Примеры логотипов</p>
                        <p className="details__light">( Примеры логотипов, которые нравятся. Можно не из
                            тематической области )</p>
                        <p className="details__bold">• Цветовая гамма</p>
                        <br/>
                        <div>
                            <span className="details__bold">Вид:</span>
                            <span className="details__light"> Новый логотип</span>
                        </div>
                        <div>
                            <span className="details__bold">Стиль:</span>
                            <span className="details__light"> Плоский</span>
                        </div>
                        <div>
                            <span className="details__bold">Создание логотипа:</span>
                            <span className="details__light"> С нуля</span>
                        </div>
                    </div>
                    <div className="details__start">
                        <p className="details__start_price">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_18_1568)">
                                    <path
                                        d="M18.9474 16V17C18.9474 18.105 18.0053 19 16.8421 19H2.10526C0.942105 19 0 18.105 0 17V3C0 1.895 0.942105 1 2.10526 1H16.8421C18.0053 1 18.9474 1.895 18.9474 3V4H9.47368C8.31053 4 7.36842 4.895 7.36842 6V14C7.36842 15.105 8.31053 16 9.47368 16H18.9474ZM9.47368 14H20V6H9.47368V14ZM13.6842 11.5C12.8105 11.5 12.1053 10.83 12.1053 10C12.1053 9.17 12.8105 8.5 13.6842 8.5C14.5579 8.5 15.2632 9.17 15.2632 10C15.2632 10.83 14.5579 11.5 13.6842 11.5Z"
                                        fill="#FFB800"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_18_1568">
                                        <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            10 000 тг
                        </p>
                        <div>
                            <span className="details__bold">Категория:</span>
                            <span className="details__light"> Установка приложений</span>
                        </div>
                        <div>
                            <span className="details__bold">Многоразовость:</span>
                            <span className="details__light"> Однократное</span>
                        </div>
                        <div>
                            <span className="details__bold">Время выполнения:</span>
                            <span className="details__light"> От 10-24 часов</span>
                        </div>
                        <div>
                            <span className="details__bold">Дата:</span>
                            <span className="details__light"> 01.08.2022</span>
                        </div>
                        <div className="details__start_button">
                            <Button text={"Начать выполнение"} type={4}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Details;