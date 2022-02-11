import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "@context/AuthContext";
import Input from "@components/Global/Input";
import { auth } from "@services/index.services";

//Importing styles
import "@styles/pages/Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  //Save data when input change
  const handleChange = (name, value) =>
    setUserData({ ...userData, [name]: value });

  //Email input handle
  const handleEmail = (e) => {
    setErrorEmail(false);
    handleChange("email", e.target.value);
  };

  //Password input handle
  const handlePass = (e) => {
    setErrorPass(false);
    handleChange("password", e.target.value);
  };

  //Handle to submit the info
  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await auth.login(userData);

    if (result.error === "Usuario no encontrado") return setErrorEmail(true);
    if (result.error === "Contraseña incorrecta") return setErrorPass(true);

    login(result);

    navigate("/admin");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <p className="login-title">Log in</p>
        {/* Email input */}
        <Input
          type="text"
          text="Email"
          id="email"
          styles="bg-light"
          onChange={handleEmail}
          value={userData.email}
        />
        {errorEmail ? (
          <p className="login-error">
            <i className="fas fa-exclamation-circle"></i>
            Email not found
          </p>
        ) : null}

        {/* Password input */}
        <Input
          type="password"
          text="Password"
          id="password"
          styles="bg-light"
          onChange={handlePass}
          value={userData.password}
        />
        {errorPass ? (
          <p className="login-error">
            <i className="fas fa-exclamation-circle"></i>
            Incorrect password
          </p>
        ) : null}

        {/* Submit button */}
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
