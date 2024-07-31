import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Path from "../paths";

const AdminRoute = () => {
  const { role } = useContext(AuthContext);

  return role !== "ADMIN" ? <Navigate to={Path.Login} /> : <Outlet />;
};

export default AdminRoute;
