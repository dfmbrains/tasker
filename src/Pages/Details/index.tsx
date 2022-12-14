import React, {FC, useEffect, useState} from 'react';
import './details.scss';
import ContactImg from './img/contactImg.png';
import DetailsImg from './img/detailsImg.png';
import Button from "../../Components/Button";
import LetterModal from "../../Components/Modals/LetterModal";

interface IDetails {
    type: boolean
}

const Details: FC<IDetails> = ({type}) => {
    const [modal, setModal] = useState(false)
    useEffect(() => {
        const body = document.querySelector('body')
        if (body) {
            body.style.overflow = modal ? 'hidden' : 'auto'
        }
    }, [modal])
    const modalHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        })
        setModal(!modal)
    }
    return (
        <main className="details">
            <div className="container">
                <h1 className="pageTitle">{type ? "Уникальный логотип. Разработка логотипа" : "Frontend разработчик"}</h1>
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
                            <span className="details__bold">
                                {type ? 'Выполнено заказов' : 'Опубликовано вакансий'}:
                            </span>
                            <span className="details__light"> 152</span>
                            <br/>
                            <span className="details__bold">Город:</span>
                            <span className="details__light"> Алматы</span>
                        </div>
                        <div className="details__button">
                            <Button type={5} text={`Связаться с ${type ? "продавцом" : "работадателем"}`}>
                                {type
                                    ? <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#FFB800"
                                              d="M16.5003 3.99996H14.8337V11.5H4.00033V13.1666C4.00033 13.625 4.37533 14 4.83366 14H14.0003L17.3337 17.3333V4.83329C17.3337 4.37496 16.9587 3.99996 16.5003 3.99996ZM13.167 8.99996V1.49996C13.167 1.04163 12.792 0.666626 12.3337 0.666626H1.50033C1.04199 0.666626 0.666992 1.04163 0.666992 1.49996V13.1666L4.00033 9.83329H12.3337C12.792 9.83329 13.167 9.45829 13.167 8.99996Z"/>
                                    </svg>
                                    : <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#3152FF"
                                              d="M16.5003 3.99996H14.8337V11.5H4.00033V13.1666C4.00033 13.625 4.37533 14 4.83366 14H14.0003L17.3337 17.3333V4.83329C17.3337 4.37496 16.9587 3.99996 16.5003 3.99996ZM13.167 8.99996V1.49996C13.167 1.04163 12.792 0.666626 12.3337 0.666626H1.50033C1.04199 0.666626 0.666992 1.04163 0.666992 1.49996V13.1666L4.00033 9.83329H12.3337C12.792 9.83329 13.167 9.45829 13.167 8.99996Z"/>
                                    </svg>
                                }
                            </Button>
                        </div>
                    </div>
                    <div className="details__description">
                        <img className="details__description_img" src={DetailsImg} alt=""/>
                        <h2 className="details__description_title">Описание {type ? 'задачи' : 'вакансии'}</h2>
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
                        {type
                            ? <>
                                <p style={{color: "#FFB800"}} className="details__start_price">
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#FFB800"
                                              d="M18.9474 15V16C18.9474 17.105 18.0053 18 16.8421 18H2.10526C0.942105 18 0 17.105 0 16V2C0 0.895 0.942105 0 2.10526 0H16.8421C18.0053 0 18.9474 0.895 18.9474 2V3H9.47368C8.31053 3 7.36842 3.895 7.36842 5V13C7.36842 14.105 8.31053 15 9.47368 15H18.9474ZM9.47368 13H20V5H9.47368V13ZM13.6842 10.5C12.8105 10.5 12.1053 9.83 12.1053 9C12.1053 8.17 12.8105 7.5 13.6842 7.5C14.5579 7.5 15.2632 8.17 15.2632 9C15.2632 9.83 14.5579 10.5 13.6842 10.5Z"/>
                                    </svg>
                                    10 000 тг
                                </p>
                                <div>
                                    <span className="details__bold">Категория:</span>
                                    <span className="details__light">Установка приложений</span>
                                </div>
                                <div>
                                    <span className="details__bold">Многоразовость:</span>
                                    <span className="details__light">Однократное</span>
                                </div>
                                <div>
                                    <span className="details__bold">Время выполнения:</span>
                                    <span className="details__light">От 10-24 часов</span>
                                </div>
                                <div>
                                    <span className="details__bold">Дата:</span>
                                    <span className="details__light">01.08.2022</span>
                                </div>
                                <div className="details__start_button">
                                    <Button text={"Начать выполнение"} type={4}/>
                                </div>
                            </>
                            : <>
                                <p style={{color: '#3152FF'}} className="details__start_price">
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#3152FF"
                                              d="M18.9474 15V16C18.9474 17.105 18.0053 18 16.8421 18H2.10526C0.942105 18 0 17.105 0 16V2C0 0.895 0.942105 0 2.10526 0H16.8421C18.0053 0 18.9474 0.895 18.9474 2V3H9.47368C8.31053 3 7.36842 3.895 7.36842 5V13C7.36842 14.105 8.31053 15 9.47368 15H18.9474ZM9.47368 13H20V5H9.47368V13ZM13.6842 10.5C12.8105 10.5 12.1053 9.83 12.1053 9C12.1053 8.17 12.8105 7.5 13.6842 7.5C14.5579 7.5 15.2632 8.17 15.2632 9C15.2632 9.83 14.5579 10.5 13.6842 10.5Z"/>
                                    </svg>
                                    10 000 тг
                                </p>
                                <div>
                                    <span className="details__bold">
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#555555"
                                                  d="M15.6665 3.79508H13.1665V2.09557C13.1665 1.15659 12.4207 0.396057 11.4998 0.396057H6.49984C5.579 0.396057 4.83317 1.15659 4.83317 2.09557V3.79508H2.33317C1.41234 3.79508 0.666504 4.55562 0.666504 5.4946V14.8419C0.666504 15.7809 1.41234 16.5414 2.33317 16.5414H15.6665C16.5873 16.5414 17.3332 15.7809 17.3332 14.8419V5.4946C17.3332 4.55562 16.5873 3.79508 15.6665 3.79508ZM6.49984 2.09557H11.4998V3.79508H6.49984V2.09557ZM15.6665 14.8419H2.33317V13.1424H15.6665V14.8419ZM15.6665 10.5931H2.33317V5.4946H4.83317V7.19411H6.49984V5.4946H11.4998V7.19411H13.1665V5.4946H15.6665V10.5931Z"/>
                                            <path fill="#555555"
                                                  d="M15.6665 10.5931H2.33317V5.4946H4.83317V7.19411H6.49984V5.4946H11.4998V7.19411H13.1665V5.4946H15.6665V10.5931Z"/>
                                            <path d="M15.6665 14.8419H2.33317V13.1424H15.6665V14.8419Z" fill="#555555"/>
                                        </svg>
                                    </span>
                                    <span className="details__light">2 года</span>
                                </div>
                                <div>
                                    <span className="details__bold">
                                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#555555"
                                                  d="M8.66683 0.401123H2.00016C1.07933 0.401123 0.34183 1.16166 0.34183 2.10064L0.333496 15.6967C0.333496 16.6357 1.071 17.3963 1.99183 17.3963H12.0002C12.921 17.3963 13.6668 16.6357 13.6668 15.6967V5.49966L8.66683 0.401123ZM10.3335 13.9972H3.66683V12.2977H10.3335V13.9972ZM10.3335 10.5982H3.66683V8.89869H10.3335V10.5982ZM7.8335 6.34942V1.67576L12.4168 6.34942H7.8335Z"/>
                                        </svg>
                                    </span>
                                    <span className="details__light">Полный рабочий день</span>
                                </div>
                                <div>
                                    <span className="details__bold">
                                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#555555"
                                                  d="M8.99984 3.63536V0.236328H0.666504V15.532H17.3332V3.63536H8.99984ZM3.99984 13.8324H2.33317V12.1329H3.99984V13.8324ZM3.99984 10.4334H2.33317V8.7339H3.99984V10.4334ZM3.99984 7.03438H2.33317V5.33487H3.99984V7.03438ZM3.99984 3.63536H2.33317V1.93584H3.99984V3.63536ZM7.33317 13.8324H5.6665V12.1329H7.33317V13.8324ZM7.33317 10.4334H5.6665V8.7339H7.33317V10.4334ZM7.33317 7.03438H5.6665V5.33487H7.33317V7.03438ZM7.33317 3.63536H5.6665V1.93584H7.33317V3.63536ZM15.6665 13.8324H8.99984V12.1329H10.6665V10.4334H8.99984V8.7339H10.6665V7.03438H8.99984V5.33487H15.6665V13.8324ZM13.9998 7.03438H12.3332V8.7339H13.9998V7.03438ZM13.9998 10.4334H12.3332V12.1329H13.9998V10.4334Z"/>
                                        </svg>
                                    </span>
                                    <span className="details__light">г. Нур-Султан</span>
                                </div>
                                <div>
                                    <span className="details__bold">
                                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#555555"
                                                  d="M12.1667 9.86954H8V14.1183H12.1667V9.86954ZM11.3333 0.522217V2.22173H4.66667V0.522217H3V2.22173H2.16667C1.24583 2.22173 0.508333 2.98226 0.508333 3.92124L0.5 15.8178C0.5 16.7568 1.24583 17.5174 2.16667 17.5174H13.8333C14.7542 17.5174 15.5 16.7568 15.5 15.8178V3.92124C15.5 2.98226 14.7542 2.22173 13.8333 2.22173H13V0.522217H11.3333ZM13.8333 15.8178H2.16667V6.47052H13.8333V15.8178Z"/>
                                        </svg>
                                    </span>
                                    <span className="details__light">1.08.2022</span>
                                </div>
                                <div className="details__start_button">
                                    <Button action={modalHandler} text={"Откликнуться"} type={4}/>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
            {!type && modal && <LetterModal close={modalHandler}/>}
        </main>
    );
};

export default Details;