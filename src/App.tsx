import Counter from "./components/counter";
import Cart from "./components/cart";
import Checkout from "./components/checkout";

import "./App.css";
import Products from "./components/products";
import Blog from "./components/blog/blog";

function App() {
    return (
        <>
            <Blog />
            <hr />
            <Counter />
            <hr />
            <Products />
            <Cart />
            <Checkout />
            <hr />
        </>
    );
}

export default App;
