import React, {FC} from 'react';
import './vacancyCard.scss';
import Button from "../Button";
import CardHeader from "../CardHeader";
import {useNavigate} from "react-router";

interface IVacancyCard {
    offer: boolean,
    status?: boolean | string,
    id?: number
}

const VacancyCard: FC<IVacancyCard> = ({offer, status, id}) => {
    const navigate = useNavigate()
    const navigateToVacancy = () => {
        navigate('1')
    }
    return (
        <div className="card vacancyCard">
            <CardHeader/>
            {offer && <p className={`vacancyCard__status vacancyCard__status-${status}`}>Приглашение</p>}
            <h2 className="vacancyCard__title">Программист Java и инженер-программист на С#</h2>
            <div className="vacancyCard__row-l vacancyCard__row">
                <div className="vacancyCard__row-s vacancyCard__row">
                    <svg width="16" height="14" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.47795 8.91488L9.47793 8.91489C9.16523 9.00648 8.8348 9.00649 8.52203 8.91489L8.52202 8.91488L3.20834 7.35897C2.59557 7.17955 2.1661 6.60472 2.1661 5.96155V5.20534C2.1661 4.96757 2.35843 4.77537 2.5928 4.77537H15.4072C15.6415 4.77537 15.8339 4.96758 15.8339 5.20534V5.96155C15.8339 6.60473 15.4044 7.17959 14.7917 7.359L9.47795 8.91488ZM2.1661 13.3982V8.32847C2.37424 8.45695 2.60012 8.55778 2.83997 8.62803L2.83998 8.62803C4.03759 8.9787 4.97869 9.25596 5.72266 9.47515C6.80076 9.79278 7.4649 9.98845 7.89576 10.1088C8.25906 10.2102 8.46383 10.2602 8.61401 10.2842C8.75193 10.3061 8.84373 10.3059 8.95749 10.3056C8.97129 10.3055 8.98541 10.3055 8.99998 10.3055C9.01529 10.3055 9.03011 10.3055 9.04457 10.3056C9.15878 10.3059 9.25082 10.3062 9.38793 10.2845C9.53803 10.2607 9.74201 10.2108 10.1044 10.1095C10.5251 9.99188 11.1694 9.80195 12.2078 9.49585C12.9621 9.27348 13.9244 8.98982 15.16 8.62803L15.1178 8.48407L15.16 8.62803C15.3999 8.55779 15.6257 8.45696 15.8339 8.32848V13.3982V13.3982C15.8339 13.6359 15.6415 13.8282 15.4072 13.8282H2.5928C2.35845 13.8282 2.1661 13.636 2.1661 13.3982ZM15.4072 3.45351H12.1096V2.2064C12.1096 1.45912 11.5051 0.85 10.76 0.85H7.24001C6.49489 0.85 5.89038 1.45912 5.89038 2.2064V3.45351H2.5928C1.63086 3.45351 0.85 4.24006 0.85 5.20534V13.3982C0.85 14.3635 1.63087 15.15 2.5928 15.15H15.4072C16.3691 15.15 17.15 14.3635 17.15 13.3982V5.20534C17.15 4.24006 16.3691 3.45351 15.4072 3.45351ZM7.20648 2.2064C7.20648 2.18671 7.22242 2.17186 7.24001 2.17186H10.76C10.7775 2.17186 10.7935 2.18672 10.7935 2.2064V3.45351H7.20648V2.2064Z"
                            fill="#A3A3A3" stroke="#A3A3A3" strokeWidth="0.3"/>
                    </svg>
                    <p className="vacancyCard__description">2 года</p>
                </div>
                <div className="vacancyCard__row-s vacancyCard__row">
                    <svg width="14" height="16" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.775 8.21683L10.8917 7.3335L6.825 11.4002L5.05833 9.6335L4.175 10.5168L6.825 13.1668L11.775 8.21683ZM13.8333 2.50016H13V0.833496H11.3333V2.50016H4.66667V0.833496H3V2.50016H2.16667C1.24583 2.50016 0.508333 3.246 0.508333 4.16683L0.5 15.8335C0.5 16.7543 1.24583 17.5002 2.16667 17.5002H13.8333C14.7542 17.5002 15.5 16.7543 15.5 15.8335V4.16683C15.5 3.246 14.7542 2.50016 13.8333 2.50016ZM13.8333 15.8335H2.16667V5.66683H13.8333V15.8335Z"
                            fill="#A3A3A3"/>
                    </svg>
                    <p className="vacancyCard__description">ГПХ</p>
                </div>
            </div>
            <p className="vacancyCard__text">Разработка и поддержка клиентских front-end приложений...</p>
            <div className="vacancyCard__row vacancyCard__row-sb">
                <p className="vacancyCard__price">250 000 ₸</p>
                <div className="vacancyCard__buttonBox">
                    {offer
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