import x from "./Ava.module.scss";

const Ava = ({image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo1Z1vLLKnqj2JdzSrMOv4HFHAXEChQruVHg&usqp=CAU', online}) => {

    return (
        <div className={x.image}>
            <img src={image} alt="ava"/>
            <span style={{backgroundColor: online ? 'rgb(6, 214, 160)' : ''}} className={x.status}></span>
        </div>
    )
}

export default Ava;