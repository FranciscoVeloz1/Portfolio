import React, { useState, useEffect } from "react";
import Table from "@components/global/Table";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { experiences } from "@services/index.services";

const Experience = () => {
  const { list, deleteData } = experiences;
  const [experieneceList, setExperieneceList] = useState([]);

  //Obtenemos las experiencias
  const getExperiences = async () => {
    const data = await list();
    setExperieneceList(data);
  };

  //Eliminamos experiences
  const handleDelete = (id, item) => {
    Swal.fire({
      text: `Do you want to delete the experience in ${item}?`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "#d9534f",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteData(id);
        getExperiences();
        res.status === "success"
          ? toast.error(`Experience deleted successfully`, {
              position: "bottom-right",
              theme: "colored",
            })
          : Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `Experience could not be deleted`,
            });
      }
    });
  };

  const tableOptions = {
    data: experieneceList,
    title: "Experience",
    headers: ["ID", "Company", "Position", "Description", "Link", "Image"],
    addLink: "/admin/experience/add",
    editLink: "/admin/experience/edit",
    delete: handleDelete,
  };

  useEffect(() => {
    getExperiences();
  }, []);

  return (
    <div className="admin-projects-container">
      <Table o={tableOptions} />
    </div>
  );
};

export default Experience;
