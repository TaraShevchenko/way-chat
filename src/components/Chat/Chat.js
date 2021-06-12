import React from 'react';
import {Route} from "react-router-dom";

import x from './Chat.module.scss';

import СhatListItem from "./СhatListItem/СhatListItem";
import Search from "./Search/Search";
import ChatDetail from "./ChatDetail/ChatDetail";


const Chat = ({Chat, newMessageTextConnect, onSendClickConnect}) => {

    let messageText = React.createRef();

    const newMessageText = (chatId) => {
        let text = messageText.current.value;
        newMessageTextConnect(text, chatId);
    }

    const onSendClick = (chatId) => {
        onSendClickConnect(chatId)
    }

    return (
        <>
            <div className="content-small">

                <div className={`${x.title} mb-4`}>Chat</div>

                <Search/>

                <div className={x.list}>
                    {Chat.ChatList.map((item, index) => (
                        <СhatListItem
                            key={index}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            lastMessage={item.lastMessage}
                            lastMessageTime={item.lastMessageTime}
                        />
                    ))}
                </div>

            </div>


            {Chat.ChatList.map((item, index) => (
                <Route path={`/Chat/${item.id}`}>
                    <ChatDetail
                        key={index}
                        name={item.name}
                        id={item.id}
                        image={item.image}
                        online={item.online}
                        messages={item.messages}
                        text={item.newMessageText}
                        messageText={messageText}
                        onSendClick={onSendClick}
                        lastOnlineTime={item.lastOnlineTime}
                        newText={newMessageText}
                    />
                </Route>
            ))}


        </>
    )
}

export default Chat;