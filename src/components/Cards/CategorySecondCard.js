import React from 'react';
import {Link} from "react-router-dom";

const CategorySecondCard = ({sec}) => {
    const {title, id} = sec
    return (
        <div>
            <div className="category">
                <Link to={`/products/${id}`} className="">
                    <button className="category-btn">{title}</button>
                </Link>
            </div>
        </div>
    );
};

export default CategorySecondCard;