import { Navigate } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "@context/AuthContext";

const IsLoggedIn = ({ view: View }) => {
  const { user } = useContext(AuthContext);
  if (user !== null) return <View />;
  return <Navigate to="/admin/login" replace={true} />;
};

export default IsLoggedIn;
