import x from './Chat.module.scss';

import СhatListItem from "./СhatListItem/СhatListItem";
import Search from "./Search/Search";
import ChatDetail from "../ChatDetail/ChatDetail";

const Chat = ({title}) => {
    return (
        <>
            <div className="content-small">

                <div className={`${x.title} mb-4`}>{title}</div>

                <Search/>

                <div className={x.list}>
                    <СhatListItem/>
                </div>

            </div>

            <ChatDetail/>
        </>
    )
}

export default Chat;