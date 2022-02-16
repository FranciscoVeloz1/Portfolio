import React from "react";
import IsLoggedIn from "@components/auth/IsLoggedIn";
import AdminExperience from "@pages/AdminExperience/Experience";
import Experience from "@pages/Experience";
import Form from "@pages/AdminExperience/Form";

const experienceRoutes = [
  {
    path: "/admin/experience",
    element: <IsLoggedIn view={AdminExperience} />,
  },
  {
    path: "/admin/experience/add",
    element: <IsLoggedIn view={Form} />,
  },
  {
    path: "/admin/experience/edit/:id",
    element: <IsLoggedIn view={Form} />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
];

export default experienceRoutes;
