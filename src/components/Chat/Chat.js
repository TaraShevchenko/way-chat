import x from './Chat.module.scss';

import React from 'react';
import СhatListItem from "./СhatListItem/СhatListItem";
import Search from "./Search/Search";
import ChatDetail from "./ChatDetail/ChatDetail";
import {Route} from "react-router-dom";
import EntryField from "../Indifferent/EntryField/EntryField";

const Chat = ({title, Chat, addMessage}) => {

    let messageText = React.createRef();

    let onSendClick = (chatId) => {
        let newMessageText = messageText.current.value;
        if (messageText.current.value) {
            addMessage(chatId, newMessageText);
            messageText.current.value = '';
        }
    }

    return (
        <>
            <div className="content-small">

                <div className={`${x.title} mb-4`}>{title}</div>

                <Search/>

                <div className={x.list}>
                    {Chat.ChatList.map((item, index) => (
                        <СhatListItem
                            key={index}
                            index={index}
                            name={item.name}
                            image={item.image}
                            lastMessage={item.lastMessage}
                            lastMessageTime={item.lastMessageTime}
                        />
                    ))}
                </div>

            </div>


            {Chat.ChatList.map((item, index) => (
                <Route path={`/Chat/${index}`}>
                    <ChatDetail
                        key={index}
                        name={item.name}
                        index={index}
                        image={item.image}
                        online={item.online}
                        messages={item.messages}
                        messageText={messageText}
                        onSendClick={onSendClick}
                        lastOnlineTime={item.lastOnlineTime}
                    />
                </Route>
            ))}


        </>
    )
}

export default Chat;