import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {searchProductReducer} from "../reducers/serachProductReducer";
import {productReducer} from "../reducers/productReducers";
import {cardReducer} from "../reducers/cardReducer";
import {basketReducer} from "../reducers/basketReducer";

const reducer = combineReducers({
    categories: productReducer,
    cards_product: cardReducer,
    search_product: searchProductReducer,
    basket: basketReducer,
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))