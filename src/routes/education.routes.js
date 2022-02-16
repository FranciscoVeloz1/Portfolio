import React from "react";
import IsLoggedIn from "@components/auth/IsLoggedIn";
import Education from "@pages/AdminEducation/Education";
import Form from "@pages/AdminEducation/Form";

const educationRoutes = [
  {
    path: "/admin/education",
    element: <IsLoggedIn view={Education} />,
  },
  {
    path: "/admin/education/add",
    element: <IsLoggedIn view={Form} />,
  },
  {
    path: "/admin/education/edit/:id",
    element: <IsLoggedIn view={Form} />,
  },
];

export default educationRoutes;
