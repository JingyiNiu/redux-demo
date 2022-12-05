import CounterType from "./counter.type";

const IncrementCounter = (payload) => {
    return {
        type: CounterType.INCREMENT,
        payload: payload,
    };
};

const DecrementCounter = (payload) => {
    return {
        type: CounterType.DECREMENT,
        payload: payload,
    };
};

const ResetCounter = (payload) => {
    return {
        type: CounterType.RESET,
        payload: payload,
    };
};

const CounterActions = {
    IncrementCounter,
    DecrementCounter,
    ResetCounter,
}

export default CounterActions;
