import React from 'react';
import {addToBasket} from "../../redux/actions/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import AddedToBasket from "../ui/AddedToBasket";

const FoodCard = ({el}) => {
    const {title, image, price, volume} = el
    const dispatch = useDispatch()
    const {basket} = useSelector(s => s.basket)
    let isAdded = basket.some(product => product.id === el.id)
    return (
        <>
            <div className="food-product">
                <img src={image}
                     className="food-product__image"
                     alt=""/>
                <div className="food-product__item">
                    <div className="food-product__item__title">
                        <h3 className="food-product__item__title__elem">{title}</h3>
                    </div>
                    <h3 className="food-product__item__volume">{volume} мл</h3>
                    <div className="food-product__item__elem">
                        <h3 className="food-product__item__elem__price">{price} сом</h3>
                        <button className="food-product__item__elem__btn"
                                style={isAdded ? {background: '#AF8057'} : {background: ''}}
                                onClick={() => dispatch(addToBasket(el))}
                        >
                            {
                                isAdded ? (<AddedToBasket/>) : 'Добавить'
                            }
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodCard;