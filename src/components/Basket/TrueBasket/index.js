import React from 'react';
import {useSelector} from "react-redux";
import InBasketProduct from "./InBasketProduct";

const TrueBasket = ({handleClickBasket}) => {
    const {basket} = useSelector(s => s.basket)
    const totalSum = basket.reduce((acc, el) => {
        return acc + (el.price ) * el.quantity
    }, 0)
    return (
        <div className="basket_product_true">
            <div className="basket_product_true__elem">
                {
                    basket.map(el => (
                        <InBasketProduct el={el} key={el.id}/>
                    ))
                }
            </div>
            <div className="basket_product_true__item">
                    <textarea name="" id="" cols="25" rows="10" placeholder="Комментарий к заказу...">
                    </textarea>
                <div className="basket_product_true__item__price">
                    <p className="basket_product_true__item__price__title">К оплате: {totalSum}
                        <span>  сом</span></p>
                </div>
                <div className="basket_product_true__item__button">
                    <button
                        onClick={handleClickBasket}
                        className="basket_product_true__item__button__btn">Оформит заказ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrueBasket;