import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";

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
  <>
    <NavBar title="Employee Dashboard"/>

    <div
      className="dashboard"
      style={{
        padding: "40px",
        textAlign: "center"
      }}
    >
      <h1 style={{ marginBottom: "40px", color:"white" }}>
        Welcome, {employeeName}
      </h1>

      <div
        className="card-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >
        {/* Daily Work */}
        <div
          className="card"
          onClick={() => navigate("/daily-work")}
          style={{
            padding: "24px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textAlign: "left"
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow =
              "0 16px 40px rgba(0,0,0,0.25)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "";
          }}
        >
          <h3>Daily Work Update</h3>
          <p>Submit your daily work progress</p>
        </div>

        {/* Performance */}
        <div
          className="card"
          style={{
            padding: "24px",
            transition: "all 0.3s ease",
            textAlign: "left"
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow =
              "0 16px 40px rgba(0,0,0,0.25)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "";
          }}
        >
          <h3>My Performance</h3>
          <p>View KPI scores and ratings</p>
        </div>

        {/* Feedback */}
        <div
          className="card"
          style={{
            padding: "24px",
            transition: "all 0.3s ease",
            textAlign: "left"
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow =
              "0 16px 40px rgba(0,0,0,0.25)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "";
          }}
        >
          <h3>Feedback</h3>
          <p>View feedback from HR & Manager</p>
        </div>
      </div>
    </div>
  </>
);

};

export default EmployeeDashboard;
