import React from 'react';
import './Reviews.scss'
import CommentCard from "../commentCard/CommentCard";
import ShowMoreBtn from "../ShowMoreButton/ShowMoreBtn";

interface Interface {
    username: string
}

const Reviews: React.FC<Interface> = ({username}) => {
    const arr = [1, 2, 3];
    return (
        <div className="reviews">
            <h2 className="reviews__about">Отзывы о {username}</h2>
            <div className="reviews__messageRow">
                {arr.map((item) => (
                    <CommentCard/>
                ))}
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <ShowMoreBtn/>
            </div>

        </div>
    );
};

export default Reviews;