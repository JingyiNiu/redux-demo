import { counterReducer } from "./counter/counter.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counterReducer,
});

export default rootReducer;
