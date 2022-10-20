import React from 'react';
import './ServiceCard.scss';
import Star from '../../Assets/icons/star.svg';
import GreyStar from '../../Assets/icons/greyStar.svg';
import {useNavigate} from "react-router";

interface Interface {
    obj: {
        image: string,
        from: number,
        to: number,
        user: string,
        desc: string,
        rate: number,
        avatar: string
    }
}

const ServiceCard: React.FC<Interface> = ({obj}) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate('1')} className="card serviceCard">
            <img className="ServiceCard__img" src={obj.image} alt="image"/>
            <div className="ServiceCard__user">
                <img className="ServiceCard__user_avatar" src={obj.avatar} alt="avatar"/>
                <span className="ServiceCard__user_username">{obj.user}</span>
                <span className="ServiceCard__user_stars">
                    {
                        Array.from(Array(5).keys())
                            .map((star, idx) => (
                                idx < obj.rate
                                    ? <img key={idx} src={Star} alt="star"/>
                                    : <img key={idx} src={GreyStar} alt="null star"/>
                            ))
                    }
                </span>
            </div>
            <hr/>
            <span className="ServiceCard__payment">
                    {obj.from ?
                        <span>От {obj.from} тг </span>
                        : ''
                    }
            </span>

            <span className="ServiceCard__desc">
                {obj.desc.slice(0, 60)}
            </span>
        </div>
    );
};

export default ServiceCard;