import Counter from "./components/counter";
import Cart from "./components/cart";
import Checkout from "./components/checkout";

import "./App.css";
import Products from "./components/products";

function App() {

    return (
        <>
            <Counter/>
            <hr />
            <Products/>
            <Cart/>
            <Checkout/>
        </>
    );
}

export default App;
