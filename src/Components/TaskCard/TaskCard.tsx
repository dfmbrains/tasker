import React from 'react';
import './TaskCard.scss';
import Djamal from '../../Assets/img/DjamalJyrnyi.webp';
import {Link} from "react-router-dom";

interface Interface {
    idx: number,
    type?: boolean
}

const TaskCard: React.FC<Interface> = ({idx, type}) => {
    return (
        <div className="TaskCard">
            <div className="TaskCard__up">
                <h2 className="TaskCard__up_title">Анимационный имиджевый ролик для продукта</h2>
                <label className="TaskCard__up_sum">
                    <span>Желаемый бюджет:</span>
                    <span>2000 тг</span>
                </label>
            </div>
            <div className="TaskCard__description">
                Требуется составить описание проекта по поиску скриптолога на KWORK. Ищем копирайтера для постоянного
                сотрудничества, мы часто публикуем задачи на KWORK. В результате ожидаем получить конверсионный
                заголовок, который хорошо будет привлекать целевых...
            </div>
            <div className="TaskCard__down">
                <div className="TaskCard__down_author">
                    <img src={Djamal} alt=""/>
                    <div className="TaskCard__down_author-about">
                        <span>Покупатель: <a href="#">obeyArt</a></span>
                        <span>Размещено проектовна бирже: <a href="#">2</a></span>
                    </div>
                </div>
                {
                    type
                        ? ''
                        : <Link to={`/marketplace/${idx}`} className="TaskCard__down_right">
                            Предложить услугу
                        </Link>
                }
            </div>
        </div>
    );
};

export default TaskCard;