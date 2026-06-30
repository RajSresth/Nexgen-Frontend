import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { PATHS } from "./paths";

const PublicRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? <Navigate to={PATHS.HOME} replace /> : <Outlet />;
};

export default PublicRoute;
