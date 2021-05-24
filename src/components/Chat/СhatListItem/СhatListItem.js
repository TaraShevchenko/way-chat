import x from './СhatListItem.module.scss'
import Ava from "../Ava/Ava";

const СhatListItem = () => {
    return (
        <div className={x.item}>

            <Ava statusColor="#9aa1b9"
                    image="http://chatvia-dark.react.themesbrand.com/static/media/avatar-2.feb0f89d.jpg"/>

            <div className={x.info}>
                <div className={x.title}>Test</div>
                <div className={x.subtitle}>hello</div>
            </div>

            <div className={x.time}>10:50</div>
        </div>
    )
}

export default СhatListItem;