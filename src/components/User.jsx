import { useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const { name, email, id } = user;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/user/${id}`)
  }
  return (
    <div className="rounded-lg border border-yellow-400 p-3">
      <h5>{name}</h5>
      <h5>{email}</h5>
        <button onClick={handleNavigate} className="p-3 my-2 rounded-lg bg-slate-200">
          Show Details
        </button>
    </div>
  );
};

export default User;
