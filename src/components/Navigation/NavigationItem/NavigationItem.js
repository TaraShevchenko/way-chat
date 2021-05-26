import x from "../Navigation.module.scss";
import {NavLink} from "react-router-dom";

const NavigationItem = ({icon, title, href}) => {

    return (
        <NavLink activeClassName={x.active} to={href} className={x.navigationItem}>
            <img src={icon} alt={title}/>
        </NavLink>
    )
}

export default NavigationItem;