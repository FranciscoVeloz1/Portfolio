import React, { useState } from "react";

//Importing components
import Sidebar from "@components/Sidebar";
import Navigation from "@components/Navigation";

const Layout = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="main-container">
      <Sidebar toggle={toggle} />

      <div className={toggle ? "main-content active" : "main-content"}>
        <Navigation setToggle={setToggle} toggle={toggle} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
