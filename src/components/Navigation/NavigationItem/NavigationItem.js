import x from "../Navigation.module.scss";
import {Link} from "react-router-dom";
import {useState} from "react";

const NavigationItem = ({image, title, activeItem, onClick, index}) => {



    return (
        <Link onClick={() => onClick(index)} to={`/${title}`} className={`${x.navigationItem} ${index === activeItem ? x.active : ''}`}>
            <img src={image} alt={title}/>
        </Link>
    )
}

export default NavigationItem;