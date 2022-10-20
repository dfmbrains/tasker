import React from 'react';
import './chatDirect.scss';
import {useParams} from "react-router";
import dataUsers from "../chatData";

const ChatDirect = () => {

    const {id}: any = useParams();

    const users = dataUsers;


    return (
        <div className="chatDirect">
            {
                id ?
                    <div className="chatDirect__chatInfo">
                        <div className="chatDirect__chatInfo_user">
                            <div className='left'>
                                <div
                                    style={{background: users[id].img ? `url(${users[id].img}) center/cover no-repeat` : '#000'}}
                                    className="chatDirect__chatInfo_user-avatar">
                                    {users[id].img ? '' : users[id].name[0]}
                                </div>
                                <div className="chatDirect__chatInfo_username">
                                    <h2>{users[id].name}</h2>
                                    <span>Онлайн</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    : ''
            }
        </div>
    );
};

export default ChatDirect;