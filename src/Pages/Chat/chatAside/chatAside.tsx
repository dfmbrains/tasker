import React from 'react';
import './chatAside.scss';
import searchIcon from '../../../Assets/icons/search.svg';
import dataUsers, {readedOrNot} from "../chatData";
import {useNavigate} from "react-router";

const ChatAside = () => {

    const users = dataUsers


    const navigate = useNavigate();

    return (
        <aside className="chatAside">
            <form className="chatAside__search">
                <input type="text"/>
                <button>F
                    <img src={searchIcon} alt=""/>
                </button>
            </form>
            <div className="chatAside__chats">
                {
                    users.map((user, idx) => (
                        <div key={idx} onClick={() => navigate(`/chat/${idx}`)} className="chatAside__chats_user">
                            <div className="chatAside__chats_user-message">
                                <div
                                    style={{background: user.img ? `url(${user.img}) center/cover no-repeat` : '#F179A4'}}
                                    className="chatAside__chats_user-avatar">
                                    {user.img ? '' : user.name[0]}
                                </div>

                                <div>
                                    <h2>{user.name}</h2>
                                    <span>{user.lastMes}</span>
                                </div>

                            </div>
                            <div className='chatAside__chats_user-info'>
                        <span className="chatAside__chats_user-date">

                        </span>
                                <span>
                            {readedOrNot(user.readed)}
                        </span>
                            </div>
                        </div>
                    ))
                }
            </div>

        </aside>
    );
};

export default ChatAside;