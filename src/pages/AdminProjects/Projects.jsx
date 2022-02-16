import React, { useState, useEffect } from "react";
import Table from "@components/global/Table";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { projects } from "@services/index.services";

const Projects = () => {
  const [projectList, setProjectList] = useState([]);

  //Obtenemos los projectos
  const getProjects = async () => {
    const data = await projects.list();
    setProjectList(data);
  };

  //Eliminamos projectos
  const handleDelete = (id, item) => {
    Swal.fire({
      text: `Do you want to delete the project ${item}?`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "#d9534f",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await projects.deleteData(id);
        getProjects();
        res.delete === "success"
          ? toast.error(`Project deleted successfully`, {
              position: "bottom-right",
              theme: "colored",
            })
          : Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `Project could not be deleted`,
            });
      }
    });
  };

  const tableOptions = {
    data: projectList,
    title: "Projects",
    headers: ["ID", "Title", "Description", "Image", "Technology", "Link", "Repository"],
    addLink: "/admin/projects/add",
    editLink: "/admin/projects/edit",
    delete: handleDelete,
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="admin-projects-container">
      <Table o={tableOptions} />
    </div>
  );
};

export default Projects;
