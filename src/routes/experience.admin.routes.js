import React from "react";
import IsLoggedIn from "@components/auth/IsLoggedIn";
import Experience from "@pages/AdminExperience/Experience";
import Form from "@pages/AdminExperience/Form";

const adminExperienceRoutes = [
  {
    path: "/admin/experience",
    element: <IsLoggedIn view={Experience} />,
  },
  {
    path: "/admin/experience/add",
    element: <IsLoggedIn view={Form} />,
  },
  {
    path: "/admin/experience/edit/:id",
    element: <IsLoggedIn view={Form} />,
  },
];

export default adminExperienceRoutes;
