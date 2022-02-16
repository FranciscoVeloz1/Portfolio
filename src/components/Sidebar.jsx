import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from "@context/AuthContext";

//Importing styles and assets
import "@styles/components/Sidebar.scss";
import logo from "@assets/LG-logo.png";

const Sidebar = ({ toggle }) => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  //Cerramos sesion
  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className={toggle ? "sidebar active" : "sidebar"}>
      <div className="sidebar-header">
        <Link to={user ? "/admin" : "/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="sidebar-content">
        <p>Menu</p>

        <ul>
          {user ? (
            <li>
              <Link to="/admin/projects">
                <i className="fas fa-chalkboard-teacher"></i>
                Projects
              </Link>
            </li>
          ) : null}

          <li>
            <Link to={user ? "/admin/experience" : "/experience"}>
              <i className="fas fa-laptop-code"></i>
              Experience
            </Link>
          </li>

          <li>
            <Link to={user ? "/admin/education" : "/education"}>
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

        {user ? (
          <button
            className="btn btn-blue"
            style={{ width: "100%" }}
            onClick={handleLogout}
          >
            Log out
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;
