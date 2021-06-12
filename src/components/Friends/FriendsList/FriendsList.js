import React from 'react';
import x from '../../Chat/СhatListItem/СhatListItem.module.scss'
import Ava from "../../Indifferent/Ava/Ava";
import AuthorImage from "../../../Assets/Profile/ProfileImage1.jpg";
import {NavLink} from "react-router-dom";

const FriendsList = () => {
    return (
        <NavLink to={`/Friends/1`} className={`${x.item} align-items-center justify-content-between`}>
            <Ava statusColor="#9aa1b9"
                 image={AuthorImage}/>

            <div className={`${x.info} d-flex align-items-center`}>
                <div className={x.titleBig}>Taras</div>
            </div>

            <div className={`${x.buttonGroup} d-flex align-items-center`}>
                <div className={x.button}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-chat-fill" viewBox="0 0 16 16">
                        <path
                            d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
                    </svg>
                </div>

                <div className={x.button}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-person-x-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
            </div>

        </NavLink>
    );
};

export default FriendsList;