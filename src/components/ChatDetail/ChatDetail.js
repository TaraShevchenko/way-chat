import x from './ChatDetail.module.scss';
import send from './Assets/right-arrow.svg'

import ChatHeader from "./ChatHeader/ChatHeader";
import Message from "./Message/Message";

const ChatDetail = () => {
    return (
        <div className={x.chatDetail}>
            <div className={`${x.block} p-3 p-lg-4`}>

                <ChatHeader />

            </div>

            <div className={x.content}>
                <Message />
            </div>

            <div className={`${x.block} p-3 p-lg-4`}>

                <input placeholder="Send message.." className={x.sendInput} type="text"/>

                <button className={x.sendMessage}>
                    <img src={send} alt="send"/>
                </button>

            </div>
        </div>
    )
}

export default ChatDetail;