import CounterType from "./counter.type";

export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case CounterType.INCREMENT:
            return state + 1;
        case CounterType.DECREMENT:
            return state - 1;
        case CounterType.RESET:
            return 0;
        default:
            return state;
    }
};
