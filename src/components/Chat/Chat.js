import x from './Chat.module.scss';

import СhatListItem from "./СhatListItem/СhatListItem";
import Search from "./Search/Search";
import ChatDetail from "../ChatDetail/ChatDetail";

const Chat = ({title, Chat}) => {
    return (
        <>
            <div className="content-small">

                <div className={`${x.title} mb-4`}>{title}</div>

                <Search/>

                <div className={x.list}>
                    {Chat.ChatList.map( (item, index) => (
                        <СhatListItem key={index}
                                      image={item.image}
                                      name={item.name}
                                      lastMessage={item.lastMessage}
                                      lastMessageTime={item.lastMessageTime}
                        />
                    ))}
                </div>

            </div>

            <ChatDetail/>
        </>
    )
}

export default Chat;