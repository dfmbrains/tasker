import React from 'react';
import './ServiceCard.scss';
import Star from '../../Assets/icons/star.svg';
import GreyStar from '../../Assets/icons/greyStar.svg';
import {useNavigate} from "react-router";
import Button from "../Button";

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

    const role = false

    const navigate = useNavigate();
    return (
        <div onClick={() => navigate('1')} className="card serviceCard">
            <img className="serviceCard__img" src={obj.image} alt="image"/>
            {
                !role ?
                    <div className="serviceCard__user">
                        <img className="serviceCard__user_avatar" src={obj.avatar} alt="avatar"/>
                        <span className="serviceCard__user_username">{obj.user}</span>
                        <span className="serviceCard__user_stars">
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
                    : ''
            }
            <hr/>
            <span className="serviceCard__payment">
                    {obj.from ?
                        <span>От {obj.from} тг </span>
                        : ''
                    }
            </span>

            <span className="serviceCard__desc">
                {obj.desc.slice(0, 60)}
            </span>

            {
                role ?
                    <div className="serviceCard__buttons">
                        <Button text={"Удалить"} type={8}/>
                        <Button text={"Отклики"} type={4}/>
                    </div>
                    : ''
            }
        </div>
    );
};

export default ServiceCard;