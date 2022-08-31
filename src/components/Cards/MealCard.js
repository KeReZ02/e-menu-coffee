import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, getCards} from "../../redux/actions/actions";
import {useParams} from "react-router-dom";
import {BsBasket} from "react-icons/bs";
import CategorySecond from "./CategorySecond";

const ProductCards = () => {
    const dispatch = useDispatch()
    const {cards_product} = useSelector(s => s.cards_product)
    const {id} = useParams()
    useEffect(() => {
        dispatch(getCards(id))
    }, [id])
    const {basket} = useSelector(s => s.basket)
    return (
        <>
         <CategorySecond/>
            <div className="container-hero">
                <div className="hero">
                {
                    cards_product.map(el => (
                        <div className="meal">
                        <div className="meal-card">
                            <img src={el.image} className="meal-img" alt="title"/>
                            <div className="meal-info">
                                <h1 className="meal-title">{el.title}</h1>
                                <div className="meal-info-block">
                                    <p className="meal-desc">{el.price} сом</p>
                                    <button className="meal-btn"
                                            onClick={() => dispatch(addToBasket(el))}>
                                        <BsBasket className="meal-basket"/>
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </>
    );
};

export default ProductCards;