import { blogTypes } from "./blog.type";

const initialState = {
    posts: [],
};

export const blogReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case blogTypes.FETCH_POSTS:
            fetchPosts(state, payload);
            return { ...state };
        default:
            return state;
    }
};

const fetchPosts = (state, payload) => {
    state.posts = payload.data
}