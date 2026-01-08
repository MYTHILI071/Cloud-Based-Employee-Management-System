import { useNavigate } from "react-router-dom";

const NavBar = ({ title }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="navbar">
      <h2 className="navbar-title">{title}</h2>
      <button className="logout-btn" onClick={logout}>Logout</button>
    </div>
  );
};

export default NavBar;
