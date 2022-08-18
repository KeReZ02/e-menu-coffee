import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import logo from '../../assets/images/image 1.png';
import Basket from "../Basket/Basket";
import {BiSearch} from "react-icons/bi";
import {BsBasket} from "react-icons/bs";

const Header = () => {
    const [search, setSearch] = useState('')
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
    const {basket} = useSelector(state => state.basket)
    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="header">
                    <div className="header-nav">
                        <Link to={'/'} className="">
                            <img src={logo} className="" alt=""/>
                            {/*<h1 className="header-title">Coffee House</h1>*/}
                        </Link>
                    </div>
                        <input type="text"
                               onChange={handleChange}
                               onKeyDown={handleKeyPress}
                               placeholder="Поиск..." className="header-input"/>
                        <Link to={'/basket'}>
                            <BsBasket className="header-basketLogo"/>
                            <span style={basket.length ? {display: ''} : {display: "none"}}
                                  className="">{basket.length ? `${basket.length}` : ''}</span>
                        </Link>
                    </div>
                    </div>
            </header>
        </>
    );
};

export default Header;