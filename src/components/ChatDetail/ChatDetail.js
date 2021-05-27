import x from './ChatDetail.module.scss';
import {Route} from "react-router-dom";

import ChatHeader from "./ChatHeader/ChatHeader";
import Message from "./Message/Message";
import EntryField from "./EntryField/EntryField";

const ChatDetail = ({online, name, image, messages}) => {

    return (
        <div className="content-big">
            <div className={`${x.block} p-3 p-lg-4`}>
                <ChatHeader
                    online={online}
                    name={name}
                    image={image}
                />
            </div>

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

            <EntryField placeholder="Send message.."/>
        </div>
    )
}

export default ChatDetail;