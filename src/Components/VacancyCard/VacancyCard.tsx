import React, {FC} from 'react';
import './vacancyCard.scss';
import Button from "../Button";
import CardHeader from "../CardHeader";
import {useNavigate} from "react-router";
import Bag from '../../Assets/icons/workBag.svg';
import Company from '../../Assets/icons/companyIcon.svg';

import Company2 from '../../Assets/icons/companyIcon2.png';
import Bag2 from '../../Assets/icons/workBag2.png';
import Date from '../../Assets/icons/DatePublic.png';
import File from '../../Assets/icons/File.png';
import Cash from '../../Assets/icons/CashIcon.svg';

interface IVacancyCard {
    offer: boolean,
    status?: boolean | string,
    id?: number,

}

const VacancyCard: FC<IVacancyCard> = ({offer, status, id}) => {
    const navigate = useNavigate()
    const navigateToVacancy = () => {
        navigate('1')
    }

    const your = true;

    return (
        <div className={`card vacancyCard ${your ? 'vacancyCardRecruiter' : ''}`}>
            {
                your ? ""
                    : <CardHeader/>
            }
            {offer && !your && <p className={`vacancyCard__status vacancyCard__status-${status}`}>Приглашение</p>}
            <h2 className="vacancyCard__title">Программист Java и инженер-программист на С#</h2>
            <div className="vacancyCard__row-l vacancyCard__row">
                {
                    your ? <>
                            <div className="vacancyCard__row-s vacancyCard__row">
                                <img src={Bag2} alt=""/>
                                <p className="vacancyCard__description">2 года</p>
                            </div>
                            <div className="vacancyCard__row-s vacancyCard__row">
                                <img src={File} alt=""/>
                                <p className="vacancyCard__description">Полный рабочий день</p>
                            </div>
                            <div className="vacancyCard__row-s vacancyCard__row">
                                <img src={Company2} alt=""/>
                                <p className="vacancyCard__description">Г. Нурсултан</p>
                            </div>
                            <div className="vacancyCard__row-s vacancyCard__row">
                                <img src={Date} alt=""/>
                                <p className="vacancyCard__description">Дата публикации: 1.08.2022</p>
                            </div>
                        </>
                        : <>
                            <div className="vacancyCard__row-s vacancyCard__row">
                                <img src={Bag} alt=""/>
                                <p className="vacancyCard__description">2 года</p>
                            </div>
                            <div className="vacancyCard__row-s vacancyCard__row">
                                <img src={Company} alt=""/>
                                <p className="vacancyCard__description">ГПХ</p>
                            </div>
                        </>
                }
            </div>
            <p className="vacancyCard__text">Разработка и поддержка клиентских front-end приложений...</p>
            <div className="vacancyCard__row vacancyCard__row-sb">
                <p className="vacancyCard__price">{your ? <img src={Cash}/> : ''} 250 000 ₸</p>
                <div className="vacancyCard__buttonBox">
                    {
                        your ?
                            <>
                                <Button text={'Редактировать'} type={5}/>
                                <Button text={'Удалить'} type={8}/>
                            </>
                            : offer
                                ? <button onClick={() => navigate(`/chat/${id}`)}
                                          className={`vacancyCard__button vacancyCard__button-${status}`}>Перейти в чат
                                </button>
                                : <Button action={navigateToVacancy} text={"Подробнее"} type={6}/>

                    }
                </div>
            </div>
        </div>
    );
};

export default VacancyCard;