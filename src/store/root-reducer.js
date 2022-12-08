import { combineReducers } from "redux";

import { counterReducer } from "./counter/counter.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { blogReducer } from "./blog/blog.reducer";

const rootReducer = combineReducers({
    counterReducer,
    cartReducer,
    blogReducer,
});

export default rootReducer;
