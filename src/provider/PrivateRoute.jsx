import React, { use } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
