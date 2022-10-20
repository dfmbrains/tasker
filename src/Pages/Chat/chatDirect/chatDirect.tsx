import React from 'react';
import './chatDirect.scss';
import {useParams} from "react-router";
import dataUsers from "../chatData";
import inputFile from '../../../Assets/icons/inputFile.svg';

const ChatDirect = () => {

    const {id}: any = useParams();

    const users = dataUsers;

    const sendMessage = (e: any)=>{
        e.preventDefault();
        let htmlNode = document.createElement('div')
        htmlNode.className = 'yourMessage'
        htmlNode.innerHTML = `
        ${e.target[0].value}
        <p class="date">${new Date().getHours()}:${new Date().getMinutes()}</p>
        `
        document.querySelector('.chatDirect__messages')?.append(htmlNode)
        e.target[0].value = ''
    }

    return (
        <div className="chatDirect">
            {
                id ?
                    <div className="direct">
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
                        <div className="chatDirect__messages">
                            <span className="yourMessage">
                                Меня зовут Нурлан, опыт работы 2 года в компании “CodePin”.
                                Отличное знание HTML, CSS и JavaScript
                                <p className="date">12:05</p>
                            </span>
                            <span className="anotherMessage">
                                Здравствуйте
                                <p className="date">12:05</p>
                            </span>
                        </div>
                        <form onSubmit={(e)=> sendMessage(e)} className="chatDirect__inputLabel">
                            <img src={inputFile} alt=""/>
                            <input placeholder="Написать сообщение..." type="text"/>
                        </form>
                    </div>

                    : ''
            }
        </div>
    );
};

export default ChatDirect;