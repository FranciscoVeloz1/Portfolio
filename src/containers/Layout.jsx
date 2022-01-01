import React, { useState } from "react";

//Importing components
import Sidebar from "@components/Sidebar";

const Layout = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="main-container">
      <Sidebar setToggle={setToggle} toggle={toggle} />

      <div className={toggle ? "main-content active" : "main-content"}>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>

        {children}
      </div>
    </div>
  );
};

export default Layout;
