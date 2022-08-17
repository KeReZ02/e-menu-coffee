import React from 'react';
import {Link} from "react-router-dom";
import basket_image from '../../../image/basket.svg'

const FalseBasket = ({handleClickBasket}) => {
    return (
        <div className="basket_product_false">
            <div className="basket_product_false__item">
                <img src={basket_image}
                     className="basket_product_false__item__img"
                     alt=""/>
                <p className="basket_product_false__item__desc">В корзине ничего нет</p>
            </div>
            <Link to={'/'} className="basket_product_false__link">
                <button
                    onClick={handleClickBasket}
                    className="basket_product_false__link__btn"
                >Заказать</button>
            </Link>
        </div>
    );
};

export default FalseBasket;