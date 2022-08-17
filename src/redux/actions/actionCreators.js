import {
    ADD_TO_BASKET,
    DECREASE_QUANTITY,
    DELETE_FROM_BASKET,
    GET_CARDS,
    GET_CATEGORIES,
    GET_SEARCH,
} from "./actionTypes";
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

export const deleteFromProductBasket = (id) => {
    const basket = JSON.parse(sessionStorage.getItem('basket'))
    const updateBasket = basket.filter(el => el.id !== id)
    sessionStorage.setItem('basket', JSON.stringify(updateBasket))
    return {type: DELETE_FROM_BASKET, payload: id}
}

export const decreaseQty = (id) => {
    let basket = JSON.parse(sessionStorage.getItem('basket')) || []
    const findProduct = basket.find(el => el.id === id)
    if (findProduct.quantity > 1) {
        basket = basket.map(el => {
            if (el.id === id) {
                return {...el, quantity: el.quantity - 1}
            } else {
                return el
            }
        })
    } else {
        return deleteFromProductBasket(id)
    }
    sessionStorage.setItem('basket', JSON.stringify((basket)))
    return {type: DECREASE_QUANTITY, payload: id}
}


