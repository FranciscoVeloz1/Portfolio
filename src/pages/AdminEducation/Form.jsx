import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { educations } from "@services/index.services";

//Importing components
import Input from "@components/global/Input";
import Select from "@components/global/Select";

//Importing styles
import "@styles/Form.scss";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Form = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { get, create, update } = educations;
  const [editing, setEditing] = useState(false);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [education, setEducation] = useState({
    name: "",
    company: "",
    date: "",
    link: "",
  });

  //Save data when input change
  const handleChange = (name, value) =>
    setEducation({ ...education, [name]: value });

  //Handle edit
  const handleEdit = async () => {
    if (id > 0) {
      setEditing(true);
      const data = await get(id);
      setEducation(data);
      setMonth(data.date.split("-")[0]);
      setYear(data.date.split("-")[1]);
    }
  };

  //Message error
  const handleError = (message) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Education could not be ${message}`,
    });
  };

  //On submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEducation = { ...education, date: `${month}-${year}` };

    if (editing) {
      const result = await update(id, newEducation);
      if (result === "Not token provided" || result.status !== "success") {
        handleError("updated");
        return;
      }
    }

    if (!editing) {
      const result = await create(newEducation);
      if (result === "Not token provided" || result.status !== "success") {
        handleError("added");

        return;
      }
    }

    navigate("/admin/education");
    toast.success(`Certificate ${editing ? "updated" : "added"} successfully`, {
      theme: "colored",
      position: "bottom-right",
    });
  };

  //Input options
  const inputOpts = [
    {
      type: "text",
      text: "Certificate",
      id: "name",
      styles: "form-input",
      labelStyle: "bg-white",
      onChange: (e) => handleChange("name", e.target.value),
      value: education.name,
    },
    {
      type: "text",
      text: "Company",
      id: "company",
      styles: "form-input",
      labelStyle: "bg-white",
      onChange: (e) => handleChange("company", e.target.value),
      value: education.company,
    },
    {
      type: "text",
      text: "Link",
      id: "link",
      styles: "form-input",
      labelStyle: "bg-white",
      onChange: (e) => handleChange("link", e.target.value),
      value: education.link,
    },
  ];

  const selectOpts = [
    {
      text: "Month",
      styles: "form-input",
      options: months,
      onChange: (e) => setMonth(e.target.value),
      value: month,
    },
    {
      text: "Year",
      styles: "form-input",
      options: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
      onChange: (e) => setYear(e.target.value),
      value: year,
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
          {editing ? "Update certificate" : "Add certificate"}
        </p>

        {inputOpts.map((i) => (
          <Input o={i} key={i.id} />
        ))}

        <div className="form-select">
          {selectOpts.map((s) => (
            <Select o={s} key={s.text} />
          ))}
        </div>

        <div className="form-btn-container">
          <button className="btn btn-blue-filled" type="submit">
            {editing ? "Update" : "Save"}
          </button>

          <Link to="/admin/education" className="btn btn-red">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
