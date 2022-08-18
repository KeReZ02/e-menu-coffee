import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../../redux/actions/actions";
import CategorySecondCard from "./CategorySecondCard";

const CategorySecond = () => {
    const dispatch = useDispatch()
    const {categories} = useSelector(state => state.categories)
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    return (
        <>
            <div className="hero">
            {
                categories.map(el => (
            <CategorySecondCard sec={el} key={el.id}/>
                ))
            }
            </div>
        </>
    );
};

export default CategorySecond;