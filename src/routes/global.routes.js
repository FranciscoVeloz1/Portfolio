import React from "react";
import Home from "@pages/Home";
import Login from "@pages/Login";

const globalRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin/login",
    element: <Login />,
  },
];

export default globalRoutes;
