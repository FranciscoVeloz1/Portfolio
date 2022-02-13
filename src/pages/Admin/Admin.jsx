import React from "react";
import Table from "@components/Global/Table";

const Admin = () => {
  const tableOptions = {
    data: [],
    title: "Example",
  };

  return (
    <div>
      <Table o={tableOptions} />
    </div>
  );
};

export default Admin;
