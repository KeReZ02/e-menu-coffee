import React from 'react';
import {Link} from "react-router-dom";

const CardCategory = ({category}) => {
    const {title, photo, id} = category
    return (
        <>
            <div className="hero__block">
                <Link to={`/products/${id}`} className="hero__block__link">
                    <img src={photo} className="hero__block__link__image" alt={title}/>
                    <h2 className="hero__block__link__title">{title}</h2>
                </Link>
            </div>
        </>
    );
};

export default CardCategory;