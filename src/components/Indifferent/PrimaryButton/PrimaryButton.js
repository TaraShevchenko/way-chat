import React from 'react';
import x from './PrimaryButton.module.scss'
import {NavLink} from "react-router-dom";

const PrimaryButton = ({image, children, url}) => {
    return (
        <div>
            {url
                ? <NavLink to={url} className={x.button} >
                    {image ? <img src={image} alt={image}/> : children}
                </NavLink>
                : <button className={x.button}>
                    {image ? <img src={image} alt={image}/> : children}
                </button>
            }
        </div>
    );
};

export default PrimaryButton;