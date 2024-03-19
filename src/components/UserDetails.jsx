import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const userDetail = useLoaderData();
  const { name, email, id } = userDetail;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="rounded-lg border border-yellow-400 p-3">
      <h5>User ID: {id}</h5>
      <h3>User's Name: {name}</h3>
      <p>User Email: {email}</p>
      <button
        className="p-3 my-2 rounded-lg bg-slate-200"
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
