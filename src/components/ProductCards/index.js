import React, {useEffect} from 'react';
import Categories from "../Categories";
import {useDispatch, useSelector} from "react-redux";
import {getCards} from "../../redux/actions/actionCreators";
import {useParams} from "react-router-dom";
import FoodCard from "../FoodCard";
import './style/ProductCards.scss'

const ProductCards = () => {
    const dispatch = useDispatch()
    const {cards_product} = useSelector(s => s.cards_product)
    const {id} = useParams()
    useEffect(() => {
        dispatch(getCards(id))
    }, [id])
    return (
        <>
            <section id="product_cards">
                <div className="container">
                    <div className="product_cards">
                        <Categories/>
                        <div style={cards_product.length < 4 ? {overflow: "hidden"} : {overflowX: "auto"}}
                             className="food-cards">
                            <div className="food-cards__elem">
                                {
                                    cards_product.map(el => (
                                        <FoodCard el={el} key={el.id}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductCards;