import x from './ChatDetail.module.scss';
import React from "react";

import ChatHeader from "./ChatHeader/ChatHeader";
import Message from "./Message/Message";
import EntryField from "../../Indifferent/EntryField/EntryField";

const ChatDetail = ({online, index, name, image, messages, messageText, onSendClick}) => {

    return (
        <div className="content-big">
            <div className={`${x.block} p-3 p-lg-4`}>
                <ChatHeader
                    online={online}
                    name={name}
                    image={image}
                />
            </div>

            <div className={x.contentWrapper}>
                <div className={x.content}>
                    {messages.map((item, index) => (
                        <Message
                            key={index}
                            name={name}
                            massage={item.text}
                            userName={item.author}
                            userImage={item.authorImage}
                        />
                    ))}

                </div>
            </div>

            <EntryField index={index} inputRef={messageText} onSendClick={onSendClick} placeholder="Send message.."/>
        </div>


    )
}

export default ChatDetail;