import React from 'react';
import './style/Basket.scss';
import logo from '../../image/logoBig.svg';
import {useSelector} from "react-redux";
import {AiOutlineCloseCircle} from "react-icons/ai";
import TrueBasket from "./TrueBasket";
import FalseBasket from "./FalseBasket";

const Basket = ({handleClickBasket}) => {
    const {basket} = useSelector(s => s.basket)
    return (
        <>
            <div id="basket">
                <div className="basket_logo">
                    <img src={logo}
                         className="basket_logo__img"
                         alt=""/>
                    <span className="basket_logo__span">
                        <AiOutlineCloseCircle className="basket_logo__span__click"
                                              onClick={handleClickBasket}
                        />
                    </span>
                </div>
                <div>
                    {
                        basket.length ?
                            (<TrueBasket
                                handleClickBasket={handleClickBasket}/>)
                            :
                            (<FalseBasket
                                handleClickBasket={handleClickBasket}
                            />)
                    }
                </div>
            </div>
        </>
    );
};

export default Basket;