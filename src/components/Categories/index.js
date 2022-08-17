import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCategories} from "../../redux/actions/actionCreators";
import Card from "./Card";
import './style/Categories.scss'

const Categories = () => {
    const dispatch = useDispatch()
    const {categories} = useSelector(state => state.categories)
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    return (
        <div id="categories">
            {
                categories.map(el => (
                    <Card el={el} key={el.id}/>
                ))
            }
        </div>
    );
};

export default Categories;