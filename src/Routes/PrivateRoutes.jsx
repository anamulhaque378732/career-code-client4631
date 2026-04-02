import { use } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);

  const location = useLocation();
  //   console.log(location.pathname);
  if (loading) {
    return <span className="loading loading-spinner text-primary"></span>;
  }
  if (!user) {
    return <Navigate to="/signin" state={location.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
