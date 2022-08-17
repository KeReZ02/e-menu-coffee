import {GET_CARDS} from "../actions/actionTypes";

const initialState = {
    cards_product: [],
}

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARDS: {
            return {...state, cards_product: action.payload}
        }
        default: {
            return state
        }
    }
}