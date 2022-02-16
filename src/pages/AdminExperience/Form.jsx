import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { experiences } from "@services/index.services";

//Importing components
import Input from "@components/global/Input";

//Importing styles
import "@styles/Form.scss";

const Form = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { get, create, update } = experiences;
  const [editing, setEditing] = useState(false);
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    description: "",
    link: "",
    img: "",
  });

  //Save data when input change
  const handleChange = (name, value) =>
    setExperience({ ...experience, [name]: value });

  //Handle edit
  const handleEdit = async () => {
    if (id > 0) {
      setEditing(true);
      const data = await get(id);
      setExperience(data);
    }
  };

  //Message error
  const handleError = (message) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Experience could not be ${message}`,
    });
  };

  //On submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editing) {
      const result = await update(id, experience);
      if (result === "Not token provided" || result.status !== "success") {
        handleError("updated");
        return;
      }
    }

    if (!editing) {
      const result = await create(experience);
      if (result === "Not token provided" || result.status !== "success") {
        handleError("added");

        return;
      }
    }

    navigate("/admin/experience");
    toast.success(`Experience ${editing ? "updated" : "added"} successfully`, {
      theme: "colored",
      position: "bottom-right",
    });
  };

  //Input options
  const inputOpts = [
    {
      type: "text",
      text: "Company",
      id: "company",
      styles: "form-input",
      labelStyle: "bg-white",
      onChange: (e) => handleChange("company", e.target.value),
      value: experience.company,
    },
    {
      type: "text",
      text: "Position",
      id: "position",
      styles: "form-input",
      labelStyle: "bg-white",
      onChange: (e) => handleChange("position", e.target.value),
      value: experience.position,
    },
    {
      type: "text",
      text: "Description",
      id: "description",
      styles: "form-input",
      labelStyle: "bg-white",
      onChange: (e) => handleChange("description", e.target.value),
      value: experience.description,
    },
    {
      type: "text",
      text: "Link",
      id: "link",
      styles: "form-input",
      labelStyle: "bg-white",
      onChange: (e) => handleChange("link", e.target.value),
      value: experience.link,
    },
    {
      type: "text",
      text: "Image",
      id: "img",
      styles: "form-input",
      labelStyle: "bg-white",
      onChange: (e) => handleChange("img", e.target.value),
      value: experience.img,
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
          {editing ? "Update experience" : "Add experience"}
        </p>

        {inputOpts.map((i) => (
          <Input o={i} key={i.id} />
        ))}

        <div className="form-btn-container">
          <button className="btn btn-blue-filled" type="submit">
            {editing ? "Update" : "Save"}
          </button>

          <Link to="/admin/experience" className="btn btn-red">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
