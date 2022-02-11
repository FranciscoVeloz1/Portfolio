import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "@context/AuthContext";
import Input from "@components/Global/Input";

//Importing styles
import "@styles/pages/Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      user: "Francisco",
      email: "xd",
    };

    login(userData);

    navigate("/admin");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <p>Log in</p>
        <Input type="text" text="Email" id="email" styles="bg-light" />
        <Input
          type="password"
          text="Password"
          id="password"
          styles="bg-light"
        />

        <div className="login-button">
          <button type="submit" className="btn btn-blue">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
