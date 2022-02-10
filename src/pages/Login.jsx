import React, { useContext } from "react";
import AuthContext from "@context/AuthContext";

const Login = () => {
  const { auth, login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      name: "Francisco",
    });

    console.log(auth.user);
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
