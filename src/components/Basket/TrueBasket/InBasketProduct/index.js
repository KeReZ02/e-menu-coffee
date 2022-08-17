import React from 'react';
import {addToBasket, decreaseQty, deleteFromProductBasket} from "../../../../redux/actions/actionCreators";
import {useDispatch} from "react-redux";
import {AiOutlineMinus} from "react-icons/ai";
import {BsBasket2} from "react-icons/bs";
import './InBasket.scss'
import {RiAddFill} from "react-icons/ri";

const InBasketProduct = ({el}) => {
    const dispatch = useDispatch()
    const {title, quantity, price, id} = el
    let resultPrice = +quantity * +price
    return (
        <div className="in-basket">
            <img className="in-basket__img"
                 src={el.image} alt=""/>
            <div className="in-basket__elem">
                <div className="in-basket__elem__item1">
                    <h2 className="in-basket__elem__item1__title">{title}</h2>
                    <BsBasket2 className="in-basket__elem__item1__icon"
                               onClick={() => dispatch(deleteFromProductBasket(id))}
                    />
                </div>
                <div className="in-basket__elem__item2">
                    <p className="in-basket__elem__item2__price">{resultPrice} сом</p>
                    <div className="in-basket__elem__item2__quantity">
                         <span className="in-basket__elem__item2__quantity__span"
                               onClick={() => dispatch(decreaseQty(id))}
                         > <AiOutlineMinus className="in-basket__elem__item2__quantity__span__icon"/>
                         </span>
                        <div className="in-basket__elem__item2__quantity__san">
                            <div className="in-basket__elem__item2__quantity__san__sum"><h3>{quantity}</h3></div>
                            <div className="in-basket__elem__item2__quantity__san__sqr">
                            </div>
                        </div>
                        <span className="in-basket__elem__item2__quantity__span"
                              onClick={() => dispatch(addToBasket(el))}
                        > <RiAddFill className="in-basket__elem__item2__quantity__span__icon"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InBasketProduct;