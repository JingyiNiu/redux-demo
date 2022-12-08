import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../store/all-actions";

const Blog = () => {
    const dispatch = useDispatch();

    const { posts } = useSelector((state: any) => state.blogReducer);

    useEffect(() => {
        dispatch<any>(allActions.blogActions.fetchPost());
    }, [dispatch]);

    return (
        <>
            <h3>Blog Posts</h3>
            <div className="row">
                {posts.length
                    ? posts.map((post: any) => {
                          return (
                              <div key={post.id} className="col-6">
                                  <h6>{post.title}</h6>
                                  <p>{post.body}</p>
                              </div>
                          );
                      })
                    : "no posts"}
            </div>
        </>
    );
};

export default Blog;
