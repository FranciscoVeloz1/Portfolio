import React from "react";
import Table from "@components/Global/Table";

const Admin = () => {
  const initialState = [
    {
      id: 1,
      title: "Lorem, ipsum dolor.",
      badge: "React Native",
      badgeColor: "blue",
      duration: "1000",
    },
    {
      id: 2,
      title: "Lorem, ipsum dolor.",
      badge: "Node.js",
      badgeColor: "green",
      duration: "2000",
    },
    {
      id: 3,
      title: "Lorem, ipsum dolor.",
      badge: "JavaScript",
      badgeColor: "yellow",
      duration: "2000",
    },
    {
      id: 4,
      title: "Lorem, ipsum dolor.",
      badge: "React",
      badgeColor: "blue",
      duration: "3000",
    },
  ];

  const handleDelete = (id, item) => {
    alert(`${id} - ${item} has been deleted`);
  };

  const tableOptions = {
    data: initialState,
    title: "Example",
    headers: ["ID", "Title", "Type", "Color", "Time"],
    editLink: "/admin/projects/edit",
    delete: handleDelete,
  };

  return (
    <div>
      <Table o={tableOptions} />
    </div>
  );
};

export default Admin;
