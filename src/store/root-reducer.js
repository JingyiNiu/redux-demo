import { combineReducers } from "redux";

import { counterReducer } from "./counter/counter.reducer";
import { cartReducer } from "./cart/cart.reducer";

const rootReducer = combineReducers({
    counterReducer,
    cartReducer,
});

export default rootReducer;
