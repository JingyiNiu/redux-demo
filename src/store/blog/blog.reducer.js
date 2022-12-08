import { blogTypes } from "./blog.type";

const initialState = {
    posts: [],
};

export const blogReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case blogTypes.FETCH_POSTS:
            return { ...state, posts: payload};
        default:
            return state;
    }
};