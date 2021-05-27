import x from './СhatListItem.module.scss'
import Ava from "../Ava/Ava";
import {NavLink} from "react-router-dom";

const СhatListItem = ({name, image, lastMessage, lastMessageTime, index}) => {
    return (
        <NavLink to={`/Chat/${index}`} className={x.item}>
            <Ava statusColor="#9aa1b9"
                    image={image}/>

            <div className={x.info}>
                <div className={x.title}>{name}</div>
                <div className={x.subtitle}>{lastMessage}</div>
            </div>

            <div className={x.time}>{lastMessageTime}</div>
        </NavLink>
    )
}
export default СhatListItem;