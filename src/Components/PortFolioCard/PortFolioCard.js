import React from 'react';
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
import Remove from './remove.svg';
import Viewed from './view.svg';
import './PortFolioCard.scss'

const PortFolioCard = ({work, idx}) => {
    return (
        <a datatype="image" href={work.img} style={{background: `url(${work.img}) center/cover no-repeat`}}
           data-fancybox=""
           className="portfolioCard" key={idx}>
            <div className="blur"></div>
            <div className="portfolioCard__info">
                <h2>{work.title}</h2>
                <span className="portfolioCard__category">{work.category}</span>
            </div>
            <span className="portfolioCard__viewed">
                <img src={Viewed} alt=""/>21
            </span>
            <img alt={"remove"} src={Remove} className="portfolioCard__remove"/>
        </a>
    );
};

export default PortFolioCard;