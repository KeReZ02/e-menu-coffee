import React from 'react';
import {NavLink} from "react-router-dom";

const Card = ({el}) => {
    const {title, photo, id} = el
    return (
        <div className="categories">
            <NavLink to={`/products/${id}`} className="categories__link">
                <img className="categories__link__image"
                    src={photo} alt=""/>
                <h2 className="categories__link__title">{title}</h2>
            </NavLink>
        </div>
    );
};

export default Card;