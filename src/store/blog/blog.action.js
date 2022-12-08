import { blogTypes } from "./blog.type";
import axios from "axios";

const api_url = "https://jsonplaceholder.typicode.com/";

const fetchPost = () => async (dispatch) => {
    const res = await axios.get(api_url + "posts");
    dispatch({ type: blogTypes.FETCH_POSTS, payload: res.data });
};

const blogActions = {
    fetchPost,
};

export default blogActions;
