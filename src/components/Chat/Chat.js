import x from './Chat.module.scss';

import СhatListItem from "./СhatListItem/СhatListItem";
import Search from "./Search/Search";

const Chat = ({title}) => {
    return (

        <div className={`${x.chatList} px-4 pt-4`}>

            <div className={`${x.title} mb-4`}>{title}</div>

            <Search />

            <div className={x.list}>
                <СhatListItem />
            </div>

        </div>

    )
}

export default Chat;