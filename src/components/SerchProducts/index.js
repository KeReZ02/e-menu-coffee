import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getSearchProduct} from "../../redux/actions/actionCreators";
import SearchCard from "./SearchCard";
import './style/SearchProduct.scss'

const SearchProducts = () => {
    const {search} = useParams()
    const dispatch = useDispatch()
    const {search_product} = useSelector(s => s.search_product)
    useEffect(() => {
        dispatch(getSearchProduct(search))
    }, [search])
    return (
        <section id='search'>
            <div className="container">
                <div className="search">
                    {
                        search_product.map(el => (
                            <SearchCard el={el} key={el.id}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default SearchProducts;