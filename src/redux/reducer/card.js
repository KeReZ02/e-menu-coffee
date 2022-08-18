import {GET_CARDS} from "../type/types";

const initialState = {
    cards_product: [],
}

export const card = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARDS: {
            return {...state, cards_product: action.payload}
        }
        default: {
            return state
        }
    }
}