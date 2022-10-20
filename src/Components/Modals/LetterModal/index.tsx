import React, {FC, useRef, useState} from 'react';
import './letterModal.scss'
import ProfileImg from './img/profileImg.png'
import Button from "../../Button";

interface ILetterModal {
    close: any
}

const LetterModal: FC<ILetterModal> = ({close}) => {
    const [step, setStep] = useState(true)

    const fileInputRef: any = useRef()
    const fileInputClickHandler = () => {
        fileInputRef.current.click()
    }

    const submitHandler = (e: any) => {
        e.preventDefault()
        setStep(false)
    }

    const closeModalHandler = () => {
        close()
        setStep(true)
    }
    return (
        <>
            {step
                ? <div className="letterModal letterModal__start">
                    <div className="letterModal__top">
                        <h2 className="letterModal__title letterModal__title_white">Сопроводительное письмо</h2>
                        <button onClick={close} className="letterModal__close">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path fill="rgba(255,255,255,1)"
                                      d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="letterModal__row">
                        <div className="letterModal__about">
                            <div className="letterModal__about_profile">
                                <img src={ProfileImg} alt=""/>
                                <div>
                                    <h3 className="letterModal__about_title">ObeyArt1295</h3>
                                    <svg className="letterModal__about_profile-rate" width="101" height="20"
                                         viewBox="0 0 101 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#FFB800" stroke="#FFB800" strokeWidth="2"
                                              d="M10 4.17213L11.0694 7.44626C11.338 8.26883 12.1052 8.82533 12.9705 8.82533H16.42L13.6382 10.8359C12.9336 11.3452 12.6387 12.2514 12.9086 13.0778L13.9733 16.3375L11.1716 14.3124C10.4723 13.807 9.5277 13.807 8.82841 14.3124L6.02673 16.3375L7.09136 13.0778C7.36127 12.2514 7.06638 11.3452 6.36178 10.8359L3.58004 8.82533H7.02948C7.89481 8.82533 8.66199 8.26883 8.93065 7.44626L10 4.17213Z"/>
                                        <path fill="#FFB800" stroke="#FFB800" strokeWidth="2"
                                              d="M31 4.17213L32.0694 7.44626C32.338 8.26883 33.1052 8.82533 33.9705 8.82533H37.42L34.6382 10.8359C33.9336 11.3452 33.6387 12.2514 33.9086 13.0778L34.9733 16.3375L32.1716 14.3124C31.4723 13.807 30.5277 13.807 29.8284 14.3124L27.0267 16.3375L28.0914 13.0778C28.3613 12.2514 28.0664 11.3452 27.3618 10.8359L24.58 8.82533H28.0295C28.8948 8.82533 29.662 8.26883 29.9306 7.44626L31 4.17213Z"/>
                                        <path fill="#FFB800" stroke="#FFB800" strokeWidth="2"
                                              d="M51 4.17213L52.0694 7.44626C52.338 8.26883 53.1052 8.82533 53.9705 8.82533H57.42L54.6382 10.8359C53.9336 11.3452 53.6387 12.2514 53.9086 13.0778L54.9733 16.3375L52.1716 14.3124C51.4723 13.807 50.5277 13.807 49.8284 14.3124L47.0267 16.3375L48.0914 13.0778C48.3613 12.2514 48.0664 11.3452 47.3618 10.8359L44.58 8.82533H48.0295C48.8948 8.82533 49.662 8.26883 49.9306 7.44626L51 4.17213Z"/>
                                        <path fill="#FFB800" stroke="#FFB800" strokeWidth="2"
                                              d="M71 4.17213L72.0694 7.44626C72.338 8.26883 73.1052 8.82533 73.9705 8.82533H77.42L74.6382 10.8359C73.9336 11.3452 73.6387 12.2514 73.9086 13.0778L74.9733 16.3375L72.1716 14.3124C71.4723 13.807 70.5277 13.807 69.8284 14.3124L67.0267 16.3375L68.0914 13.0778C68.3613 12.2514 68.0664 11.3452 67.3618 10.8359L64.58 8.82533H68.0295C68.8948 8.82533 69.662 8.26883 69.9306 7.44626L71 4.17213Z"/>
                                        <path fill="#FFB800" stroke="#FFB800" strokeWidth="2"
                                              d="M91 4.17213L92.0694 7.44626C92.338 8.26883 93.1052 8.82533 93.9705 8.82533H97.42L94.6382 10.8359C93.9336 11.3452 93.6387 12.2514 93.9086 13.0778L94.9733 16.3375L92.1716 14.3124C91.4723 13.807 90.5277 13.807 89.8284 14.3124L87.0267 16.3375L88.0914 13.0778C88.3613 12.2514 88.0664 11.3452 87.3618 10.8359L84.58 8.82533H88.0295C88.8948 8.82533 89.662 8.26883 89.9306 7.44626L91 4.17213Z"/>
                                    </svg>
                                    <p className="letterModal__about_profile-status">
                                        Онлайн
                                        <span/>
                                    </p>
                                </div>
                            </div>
                            <div className="letterModal__about_title">В письме укажите:</div>
                            <ul className="letterModal__about_reqs">
                                <li>
                                    <span/>
                                    ваши навыки
                                </li>
                                <li>
                                    <span/>
                                    места работы (если есть)
                                </li>
                                <li>
                                    <span/>
                                    почему вас должны взять
                                </li>
                            </ul>
                        </div>
                        <form onSubmit={submitHandler} className="letterModal__form">
                            <textarea placeholder={"Ваше сообщение"} required={true}/>
                            <div className="letterModal__form_row">
                                <input ref={fileInputRef} hidden={true} type="file"/>
                                <p onClick={fileInputClickHandler} className="letterModal__form_file">
                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#3152FF"
                                              d="M8.58942 14.3093C6.79808 16.1006 3.896 16.0977 2.10761 14.3093C0.319214 12.5209 0.316268 9.61879 2.10761 7.82745L8.29479 1.64027C9.59704 0.338015 11.7066 0.338015 13.0088 1.64027C14.3111 2.94252 14.3111 5.05206 13.0088 6.35431L8.00016 11.363C7.18699 12.1762 5.86706 12.1762 5.05388 11.363C4.24071 10.5498 4.24071 9.22988 5.05388 8.41671L9.4733 3.99729L10.3572 4.88118L5.93777 9.30059C5.61368 9.62468 5.61073 10.1521 5.93777 10.4791C6.2648 10.8061 6.79219 10.8032 7.11628 10.4791L12.125 5.47043C12.9381 4.65726 12.9381 3.33733 12.125 2.52415C11.3118 1.71098 9.99185 1.71098 9.17867 2.52415L2.99149 8.71134C1.68923 10.0136 1.68923 12.1231 2.99149 13.4254C4.29374 14.7276 6.40328 14.7276 7.70553 13.4254L13.3035 7.82745L14.1873 8.71134L8.58942 14.3093Z"/>
                                    </svg>
                                    Прикрепить файл
                                </p>
                                <div className="letterModal__form_button">
                                    <Button text={"Отправить"} type={4} submit={true}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                : <div className="letterModal letterModal__end">
                    <h3 className="letterModal__title letterModal__title_dark">Ваша заявка отправлена</h3>
                    <div className="letterModal__subtitle">“Frontend разработчик”</div>
                    <Button action={closeModalHandler} text={"Ок"} type={4}/>
                </div>
            }
            <div onClick={close} className="letterModal__layout"></div>
        </>
    );
};

export default LetterModal;