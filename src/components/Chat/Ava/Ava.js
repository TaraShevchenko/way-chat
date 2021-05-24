import x from "./Ava.module.scss";

const Ava = ({statusColor, image}) => {
    return (
        <div className={x.image}>
            <img src={image} alt="ava"/>
            <span style={{backgroundColor: statusColor}} className={x.status}></span>
        </div>
    )
}

export default Ava;