import x from './ChatHeader.module.scss'

const ChatHeader = () => {
    return (
        <>
            <div className={x.user}>

                <img src="http://chatvia-dark.react.themesbrand.com/static/media/avatar-2.feb0f89d.jpg" alt="ava"/>

                <div className={`${x.userName} ms-3 me-1`}>Taras Shevchenko</div>

                <span className={x.userStatus}>
                    <svg width="10" height="10" fill="currentColor" viewBox="0 0 512 512"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 341.332031c-47.0625 0-85.332031-38.269531-85.332031-85.332031s38.269531-85.332031 85.332031-85.332031 85.332031 38.269531 85.332031 85.332031-38.269531 85.332031-85.332031 85.332031zm0 0"/>
                    </svg>
                </span>



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