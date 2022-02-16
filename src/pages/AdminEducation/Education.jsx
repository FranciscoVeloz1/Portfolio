import React, { useState, useEffect } from "react";
import Table from "@components/global/Table";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { educations } from "@services/index.services";

const Education = () => {
  const { list, deleteData } = educations;
  const [educationList, setEducationList] = useState([]);

  //Obtenemos los educations
  const getEducations = async () => {
    const data = await list();
    setEducationList(data);
  };

  //Eliminamos experiences
  const handleDelete = (id, item) => {
    Swal.fire({
      text: `Do you want to delete ${item} certificate?`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "#d9534f",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteData(id);
        getEducations();
        res.status === "success"
          ? toast.error(`Certificate deleted successfully`, {
              position: "bottom-right",
              theme: "colored",
            })
          : Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `Certificate could not be deleted`,
            });
      }
    });
  };

  const tableOptions = {
    data: educationList,
    title: "Education",
    headers: ["ID", "Certificate", "Company", "Date", "Link"],
    addLink: "/admin/education/add",
    editLink: "/admin/education/edit",
    delete: handleDelete,
  };

  useEffect(() => {
    getEducations();
  }, []);

  return (
    <div className="admin-projects-container">
      <Table o={tableOptions} />
    </div>
  );
};

export default Education;
