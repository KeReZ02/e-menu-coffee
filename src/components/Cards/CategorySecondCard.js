import React from 'react';
import {Link} from "react-router-dom";

const CategorySecondCard = ({sec}) => {
    const {title, id} = sec
    return (
        <div className="cat">
            <div className="category2">
                <Link to={`/products/${id}`} className="">
                    <button className="category2-btn">{title}</button>
                </Link>
            </div>
        </div>
    );
};

export default CategorySecondCard;