import {GET_SEARCH} from "../actions/actionTypes";

const initialState = {
    search_product: [],
}

export const searchProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH: {
            return {...state, search_product: action.payload}
        }
        default: {
            return state
        }
    }
}