import counterType from "./counter.type";

const IncrementCounter = (payload) => {
    return {
        type: counterType.INCREMENT,
        payload: payload,
    };
};

const DecrementCounter = (payload) => {
    return {
        type: counterType.DECREMENT,
        payload: payload,
    };
};

const ResetCounter = (payload) => {
    return {
        type: counterType.RESET,
        payload: payload,
    };
};

const counterActions = {
    IncrementCounter,
    DecrementCounter,
    ResetCounter,
};

export default counterActions;
