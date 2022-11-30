import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../context/UserContext";
import Spinner from "../Spinner/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  
  // console.log(user);

  if (loader) {
    return <Spinner />;
  }

  if (!user) {
    toast.error("Your have to login first!");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
