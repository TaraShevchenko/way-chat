import x from "./Ava.module.scss";

const Ava = ({image, online}) => {

    return (
        <div className={x.image}>
            <img src={image} alt="ava"/>
            <span style={{backgroundColor: online ? 'rgb(6, 214, 160)' : ''}} className={x.status}></span>
        </div>
    )
}

export default Ava;