import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Naviagate } from "react-router-dom";
import { PATHS } from "./endpoints";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? <Outlet /> : <Naviagate to={PATHS.LOGIN} />;
};

export default ProtectedRoutes;
