import React from "react";
import IsLoggedIn from "@components/Auth/IsLoggedIn";
import Admin from "@pages/Admin/Admin";

const adminRoutes = [
  {
    path: "/admin",
    element: <IsLoggedIn view={Admin} />,
  },
];

export default adminRoutes;
