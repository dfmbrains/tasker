import React from 'react';
import './HomeBenefitCard.scss';

interface Interface {
    data: {
        image: string,
        title: string,
        desc: string
    }
}

const HomeBenefitCard: React.FC<Interface> = ({data}) => {
    return (
        <div className="HomBenefitCard">
            <img src={data.image} alt=""/>
            <h2 className="HomBenefitCard__title">{data.title}</h2>
            <span className="HomBenefitCard__desc">{data.desc}</span>
        </div>
    );
};

export default HomeBenefitCard;