import React from 'react';
import {BsFillBasket3Fill} from "react-icons/bs";
import './Added.scss'

const AddedToBasket = () => {
    return (
        <>
            <span className="added">Добавлен <BsFillBasket3Fill/></span>
        </>
    );
};

export default AddedToBasket;