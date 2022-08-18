import {Route, Routes} from "react-router-dom";
import './styles/reset.scss';
import Home from "./components/Hero/Hero";
import ProductCards from "./components/Cards/MealCard";
import SearchProducts from "./components/Search/Search";
import Basket from "./components/Basket/Basket";
import Header from "./components/Header/Header";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/products/:id'} element={<ProductCards/>}/>
                <Route path={'/search-results/:search'} element={<SearchProducts/>}/>
                <Route path={'/basket'} element={<Basket/>}/>
            </Routes>
        </>
    );
}

export default App;
