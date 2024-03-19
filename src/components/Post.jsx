import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();
  const { body, title, id } = post;
  const handleNavigate = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="rounded-lg border border-yellow-400 p-3">
      <h3>Post title: {title}</h3>
      <p>{body}</p>
      <button
        onClick={handleNavigate}
        className="p-3 my-2 rounded-lg bg-slate-200"
      >
        Show Details
      </button>
    </div>
  );
};

export default Post;
