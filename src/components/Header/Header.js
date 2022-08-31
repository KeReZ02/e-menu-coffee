import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import logo from '../../assets/images/image 1.png';
import Basket from "../Basket/Basket";
import {BiDish, BiSearch} from "react-icons/bi";
import {BsAspectRatioFill, BsBasket, BsBasket2Fill, BsFillCalendarMonBsBsFillCloudMoonFill, MoonBsCloudMoonF, BsCloudMoonFillill, BsMoonFill} from "react-icons/bs";
import { RiCameraSwitchLine, RiCustomerService2Fill, RiOrderPlayFill, RiServiceFill, RiSwitchFill } from 'react-icons/ri';

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
                        <Link to={'/'} className="header-nav-link">
                            <img src={logo} className="" alt=""/>
                            {<h1 className="header-nav-link-title">Coffee House</h1>}
                        </Link>
                    </div>
                    <div class=" header-input">
            
                        <input type="header-text"
                               onChange={handleChange}
                               onKeyDown={handleKeyPress}
                               placeholder="Поиск..." className="header-input"
                               />
                                <BiSearch className="header-searchLogo"/>
                               </div>
                        <Link to={'/'}>
                        
                            <BiDish className="header-dishLogo"/>
                           </Link>
                        <Link to={'/'}>
                        <BsMoonFill className="header-moonLogo"/>
                             </Link>
                        <Link to={'/basket'}>
                            <BsBasket2Fill className="header-basketLogo"/>
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