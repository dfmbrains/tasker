import React from 'react';
import './cardHeader.scss';
import CasperLogo from "./img/casperLogo.png";

interface Interface {
    img?: string;
}

const CardHeader: React.FC<Interface> = ({img}) => {
    return (
        <div className="cardHeader">
            <img src={CasperLogo} alt="CasperLogo"/>
            <div>
                <h3 className="cardHeader__name">Daily mail</h3>
                <p className="cardHeader__description">г. Нур - Султан</p>
            </div>
            <p className="cardHeader__description cardHeader__date">14.08.22</p>
        </div>
    );
};

export default CardHeader;