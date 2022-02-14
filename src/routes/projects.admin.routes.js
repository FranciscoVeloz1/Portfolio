import React from "react";
import IsLoggedIn from "@components/auth/IsLoggedIn";
import Projects from "@pages/AdminProjects/Projects";
import Form from "@pages/AdminProjects/Form";

const adminProjectsRoutes = [
  {
    path: "/admin/projects",
    element: <IsLoggedIn view={Projects} />,
  },
  {
    path: "/admin/projects/add",
    element: <IsLoggedIn view={Form} />,
  },
  {
    path: "/admin/projects/edit/:id",
    element: <IsLoggedIn view={Form} />,
  },
];

export default adminProjectsRoutes;
