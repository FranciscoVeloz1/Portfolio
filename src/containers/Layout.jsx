import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

//Importing components
import Sidebar from "@components/Sidebar";
import Navigation from "@components/Navigation";

const Layout = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="main-container">
      <Sidebar toggle={toggle} />

      <div
        className={toggle ? "main-content active" : "main-content"}
        onClick={() => (toggle ? setToggle(!toggle) : null)}
      >
        <Navigation setToggle={setToggle} toggle={toggle} />
        {children}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Layout;
