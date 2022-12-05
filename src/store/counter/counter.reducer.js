import counterType from "./counter.type";

export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case counterType.INCREMENT:
            return state + 1;
        case counterType.DECREMENT:
            return state - 1;
        case counterType.RESET:
            return 0;
        default:
            return state;
    }
};
