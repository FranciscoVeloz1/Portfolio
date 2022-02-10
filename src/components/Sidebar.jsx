import React from "react";
import { Link } from "react-router-dom";

//Importing styles and assets
import "@styles/components/Sidebar.scss";

const Sidebar = ({ toggle }) => {
  return (
    <div className={toggle ? "sidebar active" : "sidebar"}>
      <div className="sidebar-header">
        <Link to="/">Francisco Veloz</Link>
      </div>

      <div className="sidebar-content">
        <p>Menu</p>

        <ul>
          <li>
            <Link to="#">
              <i className="fas fa-laptop-code"></i>
              Experience
            </Link>
          </li>

          <li>
            <Link to="#">
              <i className="fas fa-school"></i>
              Education
            </Link>
          </li>

          <li>
            <Link to="#">
              <i className="fas fa-award"></i>
              Competitions
            </Link>
          </li>
          
          <li>
            <Link to="#">
              <i className="fas fa-chalkboard-teacher"></i>
              Tutorials
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
