import {useState} from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

import x from './Navigation.module.scss'

import Profile from './Assets/Images/Profile.svg';
import Chat from './Assets/Images/Chat.svg';


const Navigation = () => {

    const [activeItem, setActiveItem] = useState(0);

    const onLinkClick = (index) => {
        setActiveItem(index);
    }

    const menuItems = [
        {
            title: 'Profile',
            image: Profile
        },
        {
            title: 'Chat',
            image: Chat
        },
    ]

    return (

        <div className={x.navigation}>
            {menuItems.map((item, index) =>
                <NavigationItem onClick={() => onLinkClick(index)}
                                key={index}
                                index={index}
                                image={item.image}
                                title={item.title}
                                activeItem={activeItem}
                />)}
        </div>
    )
}

export default Navigation