import { useSelector, useDispatch } from "react-redux";
import allActions from "../store/all-actions";

function Counter() {
    const count = useSelector((state: any) => state.counterReducer);
    const dispatch = useDispatch();

    return (
        <>
            <h3>Counter {count}</h3>
            <div className="mx-2">
                <button className="btn btn-outline-secondary me-2" onClick={() => dispatch(allActions.counterActions.IncrementCounter())}>increment</button>
                <button className="btn btn-outline-secondary me-2" onClick={() => dispatch(allActions.counterActions.DecrementCounter())}>decrement</button>
                <button className="btn btn-outline-danger me-2" onClick={() => dispatch(allActions.counterActions.ResetCounter())}>reset</button>
            </div>
        </>
    );
}

export default Counter;
