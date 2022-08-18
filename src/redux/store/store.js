import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {searchProductReducer} from "../reducer/serach";
import {productReducer} from "../reducer/category";
import {card} from "../reducer/card";
import {basket} from "../reducer/basket";

const reducer = combineReducers({
    categories: productReducer,
    cards_product: card,
    search_product: searchProductReducer,
    basket: basket,
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))