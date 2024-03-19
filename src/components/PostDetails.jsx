import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const postDetail = useLoaderData();
  const { title, body, id } = postDetail;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="rounded-lg border border-yellow-400 p-3">
      <h2>Post ID: {id}</h2>
      <h3>Post title: {title}</h3>
      <p>{body}</p>
      <button
        className="p-3 my-2 rounded-lg bg-slate-200"
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default PostDetails;
