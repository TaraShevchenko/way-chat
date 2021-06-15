import React from 'react';
import x from "./FriendsGlobalSearch.module.scss";
import Search from "../../Chat/Search/Search";
import Ava from "../../Indifferent/Ava/Ava";
import PrimaryButton from "../../Indifferent/PrimaryButton/PrimaryButton";

const FriendsGlobalSearch = () => {
    return (
        <div className={x.globalSearch}>
            <div className={x.searchWrapper}>
                <Search placeholder='Search friends..'/>
            </div>
            <div className={x.item}>
                <Ava/>

                <div className="d-flex align-items-center flex-grow-1">
                    <div className={x.itemColumn}>
                        <div className={x.itemColumnValue}>
                            <b>Name</b>: Taras
                        </div>
                        <div className={x.itemColumnValue}>
                            <b>Date of Birth</b>: 12.02.2000
                        </div>
                    </div>

                    <div className={x.itemColumn}>
                        <div className={x.itemColumnValue}>
                            <b>Location</b>: Kiev, Ukraine
                        </div>
                        <div className={x.itemColumnValue}>
                            <b>Status</b>: I'm a boss
                        </div>
                    </div>
                </div>

                <PrimaryButton>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path
                            d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
                    </svg>
                </PrimaryButton>

            </div>
        </div>
    );
};

export default FriendsGlobalSearch;