import { useNavigate } from "react-router-dom";
import "./navbar.css";

const NavBar = ({ title }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <span className="navbar-title">{title}</span>
      </div>

      <div className="navbar-right">
        <span className="navbar-user">
          {user?.name || "User"}
        </span>

        <button className="navbar-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default NavBar;
