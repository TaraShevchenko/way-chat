import x from "../Profile.module.scss";

const ProfileInformation = ({image, name, online}) => {
    return (
            <div className={x.miniInfo}>

                <img className={x.image}
                     src={image} alt={name}/>

                <div className={x.name}>
                    {name}
                </div>

                <div className={x.status}>
                    <svg width="10" height="10" fill="currentColor" viewBox="0 0 512 512"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 341.332031c-47.0625 0-85.332031-38.269531-85.332031-85.332031s38.269531-85.332031 85.332031-85.332031 85.332031 38.269531 85.332031 85.332031-38.269531 85.332031-85.332031 85.332031zm0 0"/>
                    </svg>
                    <div className={x.textMuted}>{online}</div>
                </div>

            </div>
    )
}

export default ProfileInformation;