import React from "react";
import Table from "@components/global/Table";

const Experience = () => {
  const tableOptions = {
    data: [
      {
        id: "1",
        job: "",
        description: "",
        image: "",
        tech: "",
      },
    ],
    title: "Experience",
    headers: ["ID", "Job", "Description", "Image", "Technology"],
    addLink: "/admin/experience/add",
    editLink: "/admin/experience/edit",
    delete: () => {},
  };

  return (
    <div className="admin-projects-container">
      <Table o={tableOptions} />
    </div>
  );
};

export default Experience;
