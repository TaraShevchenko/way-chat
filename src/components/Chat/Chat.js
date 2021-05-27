import x from './Chat.module.scss';

import СhatListItem from "./СhatListItem/СhatListItem";
import Search from "./Search/Search";
import ChatDetail from "../ChatDetail/ChatDetail";
import {Route} from "react-router-dom";

const Chat = ({title, Chat}) => {


    return (
        <>
            <div className="content-small">

                <div className={`${x.title} mb-4`}>{title}</div>

                <Search/>

                <div className={x.list}>
                    {Chat.ChatList.map( (item, index) => (
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
            {Chat.ChatList.map( (item, index) => (
                <Route path={`/Chat/${index}`}>
                    <ChatDetail
                        key={index}
                        name={item.name}
                        image={item.image}
                        online={item.online}
                        messages={item.messages}
                        lastOnlineTime={item.lastOnlineTime}
                    />
                </Route>
            ))}
        </>
    )
}

export default Chat;