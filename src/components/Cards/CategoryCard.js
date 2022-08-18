import React from 'react';
import {Link} from "react-router-dom";
import {findAllByDisplayValue} from "@testing-library/react";

const CategoryCard = ({cat}) => {
    const {title, photo, id} = cat
    return (
        <div>
            <div className="category">
            <div className="category-global">
                    <div className="category-card">
                        <Link to={`/products/${id}`} className="">
                            <img className="category-img" src={photo} alt=""/>
                            <h1 className="category-title">{title}</h1>
                        </Link>
                    </div>
          </div>
          </div>
        </div>
    );
};

export default CategoryCard;