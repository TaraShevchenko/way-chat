import React from 'react';
import chat from "../Chat/Chat.module.scss";
import x from "./Friends.module.scss";

import Search from "../Chat/Search/Search";
import FriendsList from "./FriendsList/FriendsList";
import FriendsGlobalSearch from "./FriendsGlobalSearch/FriendsGlobalSearch";

import {Route} from "react-router-dom";


const Friends = () => {
    return (
        <>
            <div className="content-small position-relative">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className={`${chat.title}`}>Friends</div>
                    <button className="primaryButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fill-rule="evenodd"
                                  d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </button>
                </div>
                <Search/>
                <div className={chat.list}>
                    <FriendsList/>
                </div>

                <Route path='/Friends/my/1'>
                    <div className={x.profileMin}>
                        TestMy
                    </div>
                </Route>

                <Route path='/Friends/alien/1'>
                    <div className={x.profileMin}>
                        TestAlien
                    </div>
                </Route>
            </div>

            <div className="content-big position-relative">
                <FriendsGlobalSearch/>

                <Route path='/Friends/my/1'>
                    <div className={x.profileBig}>
                        TestMy
                    </div>
                </Route>

                <Route path='/Friends/alien/1'>
                    <div className={x.profileBig}>
                        TestAlien
                    </div>
                </Route>
            </div>
        </>
    );
};

export default Friends;