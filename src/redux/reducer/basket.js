import {ADD_TO_BASKET, DECREASE_QUANTITY, DELETE_FROM_BASKET} from "../type/types";

const initialState = {
    basket: JSON.parse(sessionStorage.getItem('basket')) || [],
}

export const basket = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET: {
            const findProduct = state.basket.find(el => el.id === action.payload.id)
            if (findProduct) {
                return {
                    ...state, basket: state.basket.map(el => el.id === action.payload.id ?
                        {...el, quantity: el.quantity + 1} : el)
                }
            } else {
                return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
            }
        }
        case DELETE_FROM_BASKET: {
            const id = action.payload
            return {...state, basket: state.basket.filter(item => item.id !== id)}
        }
        case DECREASE_QUANTITY:
            if (state.basket[action.payload].quantity > 1) {
                return {
                    ...state, basket: state.basket.map((el, idx) => idx === action.payload ?
                        {...el, quantity: el.quantity - 1} : el
                    )
                }
            }
        default:
            return state
    }
}