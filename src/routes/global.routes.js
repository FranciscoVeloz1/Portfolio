import React from "react";
import Home from "@pages/Home";
import Login from "@pages/Login";
import IsNotLoggedIn from "../components/auth/IsNotLoggedIn";

const globalRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin/login",
    element: <IsNotLoggedIn view={Login} />,
  },
];

export default globalRoutes;
