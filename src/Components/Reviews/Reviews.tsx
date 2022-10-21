import React from 'react';
import './Reviews.scss'

interface Interface {
    username: string
}

const Reviews: React.FC<Interface> = ({username}) => {
    return (
        <div className="reviews">
            <h2 className="reviews__about">Отзывы о {username}</h2>
            <div className="reviews__messageRow">
                <div className="reviews__messageRow_message">
                    <div className="avatar">E</div>
                    <span className="mission">Разработка логотипа по эскизу, картинке. Логотип в векторе по эскизу</span>
                </div>
            </div>
        </div>
    );
};

export default Reviews;