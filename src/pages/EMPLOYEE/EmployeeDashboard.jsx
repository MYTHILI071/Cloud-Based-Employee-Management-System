import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeDashboard = () => {
  const [employeeName, setEmployeeName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user && user.name) {
      setEmployeeName(user.name);
    }
  }, []);

  return (
    <div className="dashboard">
      <h1>Welcome, {employeeName}</h1>

      <div className="card-container">
        <div className="card" onClick={() => navigate("/daily-work")}>
          <h3>Daily Work Update</h3>
          <p>Submit your daily work progress</p>
        </div>

        <div className="card">
          <h3>My Performance</h3>
          <p>View KPI scores and ratings</p>
        </div>

        <div className="card">
          <h3>Feedback</h3>
          <p>View feedback from HR & Manager</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
