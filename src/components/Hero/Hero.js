import React, {useEffect} from 'react';
import CategoryCard from "../Cards/CategoryCard";
import {getCategories} from "../../redux/actions/actions";
import {useDispatch, useSelector} from "react-redux";

const Home = () => {
    const dispatch = useDispatch()
    const {categories} = useSelector(state => state.categories)
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    return (
        <>
            <section id="hero">
                <div className="container">
                    {categories.map(el => (<CategoryCard cat={el} key={el.id}/>))}
                </div>
            </section>
        </>
    );
};

export default Home;