import cartTypes from "./cart.type";

const addItem = (payload) => {
    return {
        type: cartTypes.ADD_ITEM,
        payload: payload,
    };
}

const removeItem = (payload) => {
    return {
        type: cartTypes.REMOVE_ITEM,
        payload: payload,
    };
}

const quantityIncrement = (payload) => {
    return {
        type: cartTypes.QUANTITY_INCREMENT,
        payload: payload,
    };
}

const quantityDecrement = (payload) => {
    return {
        type: cartTypes.QUANTITY_DECREMENT,
        payload: payload,
    };
}

const cartActions = {
    addItem,
    removeItem,
    quantityIncrement,
    quantityDecrement
}

export default cartActions;