import cartTypes from "./cart.type";

const addItem = (payload) => {
    return {
        type: cartTypes.ADD_ITEM,
        payload: payload,
    };
}

const cartActions = {
    addItem
}

export default cartActions;