import { Navigate } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "@context/AuthContext";

const IsNotLoggedIn = ({ view: View }) => {
  const { user } = useContext(AuthContext);
  if (user === null) return <View />;
  return <Navigate to="/admin" replace={true} />;
};

export default IsNotLoggedIn;
