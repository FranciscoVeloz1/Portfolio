import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "@context/AuthContext";

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
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Login;
