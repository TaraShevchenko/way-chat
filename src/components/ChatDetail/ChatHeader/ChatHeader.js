import x from './ChatHeader.module.scss'
import Ava from "../../Chat/Ava/Ava";

const ChatHeader = () => {
    return (
        <>
            <div className={x.user}>

                <Ava statusColor="#9aa1b9"
                     image="http://chatvia-dark.react.themesbrand.com/static/media/avatar-2.feb0f89d.jpg"/>

                <div className={x.userName}>Taras Shevchenko</div>

            </div>

            <div className={x.userActions}>
                <a className={x.userActionsItem}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-search" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </a>
            </div>
        </>
    )
}

export default ChatHeader;