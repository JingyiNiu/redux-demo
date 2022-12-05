import CounterType from "./counter.type"

export const IncrementCounter = (payload) => {
    return {
        type:CounterType.INCREMENT,
        payload: payload
    }
}

export const DecrementCounter = (payload) => {
    return {
        type:CounterType.DECREMENT,
        payload: payload
    }
}

export const ResetCounter = (payload) => {
    return {
        type:CounterType.RESET,
        payload: payload
    }
}