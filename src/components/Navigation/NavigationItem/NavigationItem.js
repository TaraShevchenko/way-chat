import x from "../Navigation.module.scss";
import {NavLink} from "react-router-dom";
import {useState} from "react";

const NavigationItem = ({image, title}) => {

    return (
        <NavLink activeClassName={x.active} to={`/${title}`} className={x.navigationItem}>
            <img src={image} alt={title}/>
        </NavLink>
    )
}

export default NavigationItem;