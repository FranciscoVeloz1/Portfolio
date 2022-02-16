import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { projects } from "@services/index.services";

//Importing components
import Input from "@components/global/Input";
import Select from "@components/global/Select";

//Importing styles
import "@styles/Form.scss";

const Form = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { get, create, update } = projects;
  const [editing, setEditing] = useState(false);
  const [project, setProject] = useState({
    img: "",
    title: "",
    description: "",
    technology: "",
    link: "",
    repository: "",
  });

  //Save data when input change
  const handleChange = (name, value) =>
    setProject({ ...project, [name]: value });

  //Handle edit
  const handleEdit = async () => {
    if (id > 0) {
      setEditing(true);
      const data = await get(id);
      setProject(data);
    }
  };

  //Message error
  const handleError = (message) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Project could not be ${message}`,
    });
  };

  //On submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editing) {
      const result = await update(id, project);
      if (result === "Not token provided" || result.status !== "success") {
        handleError("updated");
        return;
      }
    }

    if (!editing) {
      const result = await create(project);
      if (result === "Not token provided" || result.status !== "success") {
        handleError("added");

        return;
      }
    }

    navigate("/admin/projects");
    toast.success(`Project ${editing ? "updated" : "added"} successfully`, {
      theme: "colored",
      position: "bottom-right",
    });
  };

  //Input options
  const inputOpts = [
    {
      type: "text",
      text: "Title",
      id: "title",
      styles: "form-input",
      labelStyle: "bg-white",
      onChange: (e) => handleChange("title", e.target.value),
      value: project.title,
    },
    {
      type: "text",
      text: "Description",
      id: "desc",
      styles: "form-input",
      labelStyle: "bg-white",
      onChange: (e) => handleChange("description", e.target.value),
      value: project.description,
    },
    {
      type: "text",
      text: "Image",
      id: "img",
      styles: "form-input",
      labelStyle: "bg-white",
      onChange: (e) => handleChange("img", e.target.value),
      value: project.img,
    },
    {
      type: "text",
      text: "Link",
      id: "link",
      styles: "form-input",
      labelStyle: "bg-white",
      onChange: (e) => handleChange("link", e.target.value),
      value: project.link,
    },
    {
      type: "text",
      text: "Repository",
      id: "repository",
      styles: "form-input",
      labelStyle: "bg-white",
      onChange: (e) => handleChange("repository", e.target.value),
      value: project.repository,
    },
  ];

  const selectOpts = [
    {
      text: "Technology",
      styles: "form-input",
      options: ["React", "Node.js", "JavaScript", "CSS", "C#"],
      onChange: (e) => handleChange("technology", e.target.value),
      value: project.technology,
    },
  ];

  //Use effect
  useEffect(() => {
    handleEdit();
  }, []);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-content">
        <p className="form-title">
          {editing ? "Update project" : "Add project"}
        </p>
        {inputOpts.map((i) => (
          <Input o={i} key={i.id} />
        ))}

        {selectOpts.map((s) => (
          <Select o={s} key={s.text} />
        ))}

        <div className="form-btn-container">
          <button className="btn btn-blue-filled" type="submit">
            {editing ? "Update" : "Save"}
          </button>

          <Link to="/admin/projects" className="btn btn-red">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
