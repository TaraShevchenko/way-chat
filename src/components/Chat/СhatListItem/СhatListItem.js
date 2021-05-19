import x from './СhatListItem.module.scss'

const СhatListItem = () => {
    return (
        <div className={x.item}>

            <div className={x.image}>
                <img src="http://chatvia-dark.react.themesbrand.com/static/media/avatar-2.feb0f89d.jpg" alt="ava"/>
                <span className={x.status}>  </span>
            </div>

            <div className={x.info}>
                <div className={x.title}>Test</div>
                <div className={x.subtitle}>hello</div>
            </div>

            <div className={x.time}>10:50</div>
        </div>
    )
}

export default СhatListItem;