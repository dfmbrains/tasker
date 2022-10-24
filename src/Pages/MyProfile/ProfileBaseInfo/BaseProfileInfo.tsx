import React from 'react';
import './baseInfo.scss'
import online from '../../../Assets/icons/onlineIcon.svg';
import photoChange from '../../../Assets/icons/PhotoChange.svg';

interface userInfo {
    data: {
        username: string,
        number: string,
        contractType: string,
        city: string,
        regDate: string,
    }
}

const BaseProfileInfo: React.FC<userInfo> = ({data}) => {
    return (
        <div className='profileBaseInfo'>
            <div className="profileBaseInfo__avatar">
                {data.username[0]}
                <div className="profileBaseInfo__avatar_change">
                    <img src={photoChange} alt=""/>
                </div>
            </div>
            <div className="profileBaseInfo__data">
                <h2 className="profileBaseInfo__data_title">Ваш телефон подтвержден</h2>
                <div className="profileBaseInfo__data_label">{data.number}</div>
            </div>
            <div className="profileBaseInfo__data">
                <h2 className="profileBaseInfo__data_title">Вид договора</h2>
                <div className="profileBaseInfo__data_label">{data.contractType}</div>
            </div>
            <div className="profileBaseInfo__data">
                <h2 className="profileBaseInfo__data_title">Город</h2>
                <div className="profileBaseInfo__data_label">{data.city}</div>
            </div>
            <div className="profileBaseInfo__data">
                <h2 className="profileBaseInfo__data_title">Дата регистрации</h2>
                <div className="profileBaseInfo__data_label">{data.regDate}</div>
            </div>
            <div className="profileBaseInfo__status">
                <span>Онлайн</span>
                <img src={online} alt=""/>
            </div>
        </div>
    );
};

export default BaseProfileInfo;