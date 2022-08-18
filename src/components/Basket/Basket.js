import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RiDeleteBin5Fill} from "react-icons/ri";
import {Link} from "react-router-dom";
import {ADD_TO_BASKET, DECREASE_QUANTITY, DELETE_FROM_BASKET} from "../../redux/type/types";

const Basket = () => {
    const {basket} = useSelector(s => s.basket)
    const dispatch = useDispatch()
    const totalSum = basket.reduce((acc,el)=> {
        return el.quantity * el.price + acc
    },0)
    return (
        <>
            <section id="basket">
                <div className="container">
                    {
                        basket.length === 0 ?
                            <div>
                                <h1 className="hero__global__text">Корзина пустая!</h1>
                            <Link to={`/`}>
                                <button className="basket-empty">Назад</button>
                            </Link>
                            </div>
                            :
                            <div className="basket__global">
                                <div className="basket__global__first">
                                    <div>
                                        <h1>Ваш счет</h1>
                                    </div>
                                </div>
                                {
                                    basket.map((el, idx) => (
                                        <div className="hero">
                                            <div className="hero__img">
                                                <img src={el.image} alt=""/>
                                            </div>
                                            <div className="hero__global">
                                                <div className="hero__global__text">
                                                    <h1>{el.title}</h1>
                                                </div>
                                                <div className="hero__box">
                                                    <div className="hero__btn">
                                                        <button className="minus_btn"
                                                                onClick={() => dispatch({
                                                                    type: DECREASE_QUANTITY,
                                                                    payload: idx
                                                                })}>
                                                            -
                                                        </button>
                                                        <h3>{el.quantity}</h3>
                                                        <button className="plus_btn"
                                                                onClick={() => dispatch({
                                                                    type: ADD_TO_BASKET,
                                                                    payload: el
                                                                })}>
                                                            +
                                                        </button>
                                                    </div>
                                                    <span>{el.price * el.quantity}</span>
                                                    <div className="hero__delete">
                                                        <button className="" onClick={() => dispatch({
                                                            type: DELETE_FROM_BASKET,
                                                            payload: el.id
                                                        })}>
                                                            <RiDeleteBin5Fill className="delete"/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="">
                                    <input type="text" placeholder="Комментарии к заказу"
                                           className="basket__global__input"/>
                                </div>
                                <div className="total">
                                    <h1>Итого: {totalSum} сомов</h1>
                                    <button className="order">Заказать</button>
                                </div>
                            </div>

                    }
                </div>
            </section>
        </>
    );
};

export default Basket;