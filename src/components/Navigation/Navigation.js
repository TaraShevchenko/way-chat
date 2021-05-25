import {useState} from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

import x from './Navigation.module.scss'

import Profile from './Assets/Images/Profile.svg';
import Chat from './Assets/Images/Chat.svg';


const Navigation = () => {

    const NavigationItems = [
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
            {NavigationItems.map((item, index) =>
                <NavigationItem key={index}
                                index={index}
                                image={item.image}
                                title={item.title}
                />)}
        </div>
    )
}

export default Navigation