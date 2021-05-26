import x from './СhatListItem.module.scss'
import Ava from "../Ava/Ava";

const СhatListItem = ({name, image, lastMessage, lastMessageTime}) => {
    return (
        <div className={x.item}>

            <Ava statusColor="#9aa1b9"
                    image={image}/>

            <div className={x.info}>
                <div className={x.title}>{name}</div>
                <div className={x.subtitle}>{lastMessage}</div>
            </div>

            <div className={x.time}>{lastMessageTime}</div>
        </div>
    )
}

export default СhatListItem;