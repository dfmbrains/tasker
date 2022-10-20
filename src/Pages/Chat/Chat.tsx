import React from 'react';
import ChatAside from "./chatAside/chatAside";
import ChatDirect from "./chatDirect/chatDirect";
import './chat.scss'

const Chat = () => {
    return (
        <main className="chat">
            <div className="container">
                <div className="chat__main">
                    <ChatAside/>
                    <ChatDirect/>
                </div>
            </div>
        </main>
    );
};

export default Chat;