import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Path from "../paths";

const PrivateRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return !isAuthenticated ? <Navigate to={Path.Login} /> : <Outlet />;
};

export default PrivateRoute;
