import React, { useState } from "react";
import Input from "@components/global/Input";
import Swal from "sweetalert2";
import { projects } from "@services/index.services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "@styles/Form.scss";

const Form = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState({
    img: "",
    title: "",
    description: "",
    badge: "",
    badgeColor: "",
  });

  //Save data when input change
  const handleChange = (name, value) =>
    setProject({ ...project, [name]: value });

  //On submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await projects.create(project);
    if (result.status !== "success") {
      console.log(result);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Project could not be added`,
      });

      return;
    }

    navigate("/admin/projects");
    toast.success("Project added successfully", {
      theme: "colored",
      position: "bottom-right",
    });
  };

  //Input options
  const inputOpts = [
    {
      type: "text",
      text: "Image",
      id: "img",
      styles: "bg-light",
      onChange: (e) => handleChange("img", e.target.value),
      value: project.img,
    },
    {
      type: "text",
      text: "Title",
      id: "title",
      styles: "bg-light",
      onChange: (e) => handleChange("title", e.target.value),
      value: project.title,
    },
    {
      type: "text",
      text: "Description",
      id: "desc",
      styles: "bg-light",
      onChange: (e) => handleChange("description", e.target.value),
      value: project.description,
    },
    {
      type: "text",
      text: "Type",
      id: "badge",
      styles: "bg-light",
      onChange: (e) => handleChange("badge", e.target.value),
      value: project.badge,
    },
    {
      type: "text",
      text: "Color",
      id: "badgeColor",
      styles: "bg-light",
      onChange: (e) => handleChange("badgeColor", e.target.value),
      value: project.badgeColor,
    },
  ];

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-content">
        <p className="form-title">Projects</p>
        <Input o={inputOpts[1]} />
        <Input o={inputOpts[2]} />
        <Input o={inputOpts[0]} />
        <Input o={inputOpts[3]} />
        <Input o={inputOpts[4]} />

        <button className="btn btn-blue-filled" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default Form;
