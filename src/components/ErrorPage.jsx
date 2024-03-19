import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h3 className="text-xl font-bold my-5 col-span-3">Oops!!!</h3>
      <h4 className="text-xl font-bold">{error.status}</h4>
      <h4 className="text-xl font-semibold">{error.data} Error</h4>
      <Link to="/">
        <button className="p-3 my-2 rounded-lg bg-slate-200">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
