import React from 'react';
import './baseInfo.scss'
import online from '../../../Assets/icons/onlineIcon.svg';
import photoChange from '../../../Assets/icons/PhotoChange.svg';
import EmployerTypesModal from "../../../Components/Modals/EmployerTypesModal";

interface userInfo {
    data: {
        username: string,
        number: string,
        contractType: string,
        city: string,
        regDate: string,
    },
    type: boolean
}

const BaseProfileInfo: React.FC<userInfo> = ({data, type}) => {
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
            {!type
                ? <div className="profileBaseInfo__data">
                    <h2 className="profileBaseInfo__data_title">Вид договора</h2>
                    <div className="profileBaseInfo__data_label">{data.contractType}</div>
                </div>
                : ''
            }
            <div className="profileBaseInfo__data">
                <h2 className="profileBaseInfo__data_title">Город</h2>
                <div className="profileBaseInfo__data_label">{data.city}</div>
            </div>
            <div className="profileBaseInfo__data">
                <h2 className="profileBaseInfo__data_title">Дата регистрации</h2>
                <div className="profileBaseInfo__data_label">{data.regDate}</div>
            </div>
            {type
                ? <div className="profileBaseInfo__data">
                    <h2 className="profileBaseInfo__data_title">Вид деятельности компании</h2>
                    <div className="profileBaseInfo__data_label">
                        Разработка Web - сервисов
                        <svg width="17" height="11" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#555555"
                                  d="M0 2.2H15.5556V0H0V2.2ZM0 7.6H15.5556V5.4H0V7.6ZM0 13H15.5556V10.8H0V13ZM17.7778 13H20V10.8H17.7778V13ZM17.7778 0V2.2H20V0H17.7778ZM17.7778 7.6H20V5.4H17.7778V7.6Z"/>
                        </svg>
                    </div>
                </div>
                : ''
            }
            <div className="profileBaseInfo__status">
                <span>Онлайн</span>
                <img src={online} alt=""/>
            </div>
            {type
                ? <EmployerTypesModal/>
                : ''
            }
        </div>
    );
};

export default BaseProfileInfo;