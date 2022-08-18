import React from 'react';
import {addToBasket} from "../../redux/actions/actions";
import {useDispatch, useSelector} from "react-redux";
import {BsBasket} from "react-icons/bs";

const SearchCard = ({el}) => {
    const dispatch = useDispatch()
    const {title, image, price} = el
    return (
        <>
            <div className="meal">
                <div className="meal-card">
                    <img src={image} className="meal-img" alt="title"/>
                    <div className="meal-info">
                        <h1 className="meal-title">{title}</h1>
                        <div className="meal-info-block">
                            <p className="meal-desc">{price} сом</p>
                            <button className="meal-btn"
                                    onClick={() => dispatch(addToBasket(el))}>
                                <BsBasket className="meal-basket"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SearchCard;