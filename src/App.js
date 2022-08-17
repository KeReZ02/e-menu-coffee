import {Route, Routes} from "react-router-dom";
import './style/Reset.scss';
import Home from "./components/pages/Home";
import ProductCards from "./components/ProductCards";
import SearchProducts from "./components/SerchProducts";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={'/products/:id'} element={<ProductCards/>}/>
                <Route path={'/search-results/:search'} element={<SearchProducts/>}/>
            </Routes>
        </>
    );
}

export default App;
