import x from './ChatDetail.module.scss';
import send from './Assets/right-arrow.svg'

import ChatHeader from "./ChatHeader/ChatHeader";
import Message from "./Message/Message";
import EntryField from "./EntryField/EntryField";

const ChatDetail = () => {
    return (
        <div className="content-big">
            <div className={`${x.block} p-3 p-lg-4`}>

                <ChatHeader />

            </div>

            <div className={x.content}>
                <Message />
            </div>

            <EntryField placeholder="Send message.." />

        </div>
    )
}

export default ChatDetail;