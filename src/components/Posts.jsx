import { useLoaderData } from "react-router-dom";
import Post from "./Post";


const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <h3 className="text-xl font-bold my-5 col-span-3">Posts: {posts.length}</h3>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;