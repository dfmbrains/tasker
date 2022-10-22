import React from 'react';
import './commentCard.scss';

const CommentCard = () => {

    const replies = [1, 2];

    return (
        <div className="commentCard">
            <div className="author">
                <div className="avatar">E</div>
                <div className="info">
                            <span className="name">Evgeniy
                            <span className="date">3 часа назад</span>
                            </span>
                    <span
                        className="about">Разработка логотипа по эскизу, картинке. Логотип в векторе по эскизу</span>
                </div>
            </div>
            <span
                className="review">Написал вечером с просьбой изготовить логотип, утром следующего же дня мне были направлены готовые работы в 6 вариантах, быстро и оперативно подредактировали и мне был направлен готовый вариант!
Моментальная и качественная работа, рекомендую !!!</span>
            {
                replies ?
                    <div className="commentCard__childrens">
                        {replies.map((el) => ((
                            <div className="commentCard">
                                <div className="author">
                                    <div className="avatar">E</div>
                                    <div className="info">
                            <span className="name">Evgeniy
                            <span className="date">3 часа назад</span>
                            </span>
                                        <span
                                            className="about">Разработка логотипа по эскизу, картинке. Логотип в векторе по эскизу</span>
                                    </div>
                                </div>
                                <span
                                    className="review">Написал вечером с просьбой изготовить логотип, утром следующего же дня мне были направлены готовые работы в 6 вариантах, быстро и оперативно подредактировали и мне был направлен готовый вариант!
                                Моментальная и качественная работа, рекомендую !!!</span>
                            </div>
                        )))}
                    </div>
                    : ''

            }
        </div>
    );
};

export default CommentCard;