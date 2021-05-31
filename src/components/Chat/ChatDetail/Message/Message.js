import x from './Message.module.scss';

const Message = ({massage, userName, userImage, name}) => {
    return (
        <div className={ name === userName ? x.alienMessage : x.myMessage}>
            <div className={x.contentMessage}>

                <img className={x.image} src={userImage} alt={userName}/>

                <div className={x.textWrapper}>
                    <div className={x.text}>
                        {massage}
                    </div>
                    <div className={x.name}>
                        {userName}
                    </div>
                </div>

                <div className={x.settings}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                        <path
                            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}
export default Message;