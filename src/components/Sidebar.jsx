import React from "react";
import { Link } from "react-router-dom";

//Importing styles and assets
import "@styles/components/Sidebar.scss";

const Sidebar = ({ toggle, setToggle }) => {
  return (
    <nav className={toggle ? "sidebar active" : "sidebar"}>
      <div className="sidebar-header">
        <p>Francisco Veloz</p>
      </div>

      <div className="sidebar-content">
        <p>Menu</p>

        <ul>
          <li>
            <Link to="#">Option A</Link>
          </li>
          <li>
            <Link to="#">Option B</Link>
          </li>
          <li>
            <Link to="#">Option C</Link>
          </li>
          <li>
            <Link to="#">Option D</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
