import React from 'react';
import {addToBasket} from "../../../redux/actions/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import AddedToBasket from "../../ui/AddedToBasket";

const SearchCard = ({el}) => {
    const dispatch = useDispatch()
    const {title, image, volume, price} = el
    const {basket} = useSelector(s => s.basket)
    let isAdded = basket.some(product => product.id === el.id)
    return (
        <div className="search__card">
            <img className="search__card__img"
                 src={image} alt=""/>
            <div className='search__card__item'>
                <div className="search__card__item__title">
                    <h2 className="search__card__item__title__elem">{title}</h2>
                </div>
                <h3 className="search__card__item__volume">{volume} мл</h3>
                <div className="search__card__item__elem">
                    <h3 className="search__card__item__elem__price">{price} сом</h3>
                    <button className="search__card__item__elem__btn"
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
    );
};

export default SearchCard;