import "./style/Header.scss";
import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import logo from '../../image/logoBig.svg';
import basket__logo from '../../image/basket.svg';
import rectangle from '../../image/rectangle.svg';
import Basket from "../Basket";
import {BiSearch} from "react-icons/bi";
import {useTheme} from '../../hooks/use-theme';

const Header = () => {
    const [search, setSearch] = useState('')
    const [click, setClick] = useState(false)
    const {setTheme} = useTheme()
    const handleDark = () => {
        setTheme("dark")
    }
    const handleLight = () => {
        setTheme("light")
    }
    const [dark_white, setDark_White] = useState(false)
    const clickDark_White = () => {
        if (dark_white) {
            handleLight()
        } else {
            handleDark()
        }
        setDark_White(!dark_white)
    }
    const navigate = useNavigate()
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const handleSearch = () => {
        if (search.length) {
            navigate(`/search-results/${search}`)
        }
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }
    const handleClickBasket = () => {
        setClick(!click)
    }
    const {basket} = useSelector(state => state.basket)
    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="header">
                        <NavLink to={'/'} className="header__link">
                            <img src={logo} className="header__link__logo" alt=""/>
                        </NavLink>
                        <div className="header__search"
                             style={dark_white ? {background: "#8E8E8E"} : {background: ""}}
                        >
                            <div className="header__search__item">
                                <BiSearch className="header__search__item__icon"
                                          onClick={handleSearch}
                                />
                            </div>
                            <input type="text"
                                   onChange={handleChange}
                                   onKeyDown={handleKeyPress}
                                   placeholder="Поиск..."
                                   className="header__search__input"
                            />
                        </div>
                        <div className="header__elem">
                            <img src={basket__logo}
                                 onClick={handleClickBasket}
                                 className="header__elem__icon"
                                 alt=""/>
                            <span style={basket.length ? {display: ''} : {display: "none"}}
                                  className="header__elem__span">{basket.length ? `${basket.length}` : ''}</span>
                        </div>
                        <div className="header__elem">
                            <img src={rectangle}
                                 onClick={clickDark_White}
                                 className="header__elem__icon"
                                 alt=""/>
                        </div>
                    </div>
                    <div>
                        {
                            click ? <Basket
                                handleClickBasket={handleClickBasket}
                                clickDark_White={clickDark_White}
                                dark_white={dark_white}/> : ''
                        }
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;