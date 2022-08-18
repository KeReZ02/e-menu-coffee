import {
    ADD_TO_BASKET,
    GET_CARDS,
    GET_CATEGORIES,
    GET_SEARCH,
} from "../type/types";
import axios from "axios";

export const getCategories = () => {
    return (dispatch) => {
        axios('https://fake-api-coffee.herokuapp.com/categories')
            .then((res) => {
                dispatch({type: GET_CATEGORIES, payload: res.data})
            })
    }
}

export const getCards = (id) => {
    return (dispatch) => {
        axios(`https://fake-api-coffee.herokuapp.com/categories/${id}/cards?categories__id=${id}`)
            .then((res) => {
                dispatch({type: GET_CARDS, payload: res.data})
            })
    }
}

export const getSearchProduct = (title) => {
    return (dispatch) => {
        axios(`https://fake-api-coffee.herokuapp.com/cards?title_like=${title}`)
            .then((res) => {
                dispatch({type: GET_SEARCH, payload: res.data})
            })
    }
}

export const addToBasket = (product) => {
    let basket = JSON.parse(sessionStorage.getItem('basket')) || []
    const findProduct = basket.find(el => el.id === product.id)
    if (findProduct) {
        basket = basket.map(el => {
            if (el.id === product.id) {
                el.quantity++
                return el
            } else {
                return el
            }
        })
    } else {
        basket = [...basket, {...product, quantity: 1}]
    }
    sessionStorage.setItem('basket', JSON.stringify((basket)))
    return {type: ADD_TO_BASKET, payload: product}
}
