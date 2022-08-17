import React, {useEffect} from 'react';
import './style/Hero.scss';
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../../redux/actions/actionCreators";
import CardCategory from "./CardCategory";

const Category = () => {
    const dispatch = useDispatch()
    const {categories} = useSelector(state => state.categories)
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    return (
        <section id="hero">
            <div className="container">
                <div className="hero">
                    {
                        categories.map(el => <CardCategory category={el} key={el.id}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Category;