import { useSelector, useDispatch } from "react-redux";
import AllActions from "./store/all-actions";

import "./App.css";

function App() {
    const count = useSelector((state: any) => state.counterReducer);
    const dispatch = useDispatch()

    return (
        <>
            <h3>{count}</h3>
            <button onClick={() => dispatch(AllActions.CounterActions.IncrementCounter())}>increment</button>
            <button onClick={() => dispatch(AllActions.CounterActions.DecrementCounter())}>decrement</button>
            <button onClick={() => dispatch(AllActions.CounterActions.ResetCounter())}>reset</button>
        </>
    );
}

export default App;
