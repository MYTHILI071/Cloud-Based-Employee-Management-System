import { useNavigate } from "react-router-dom";

const ManagerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard page">
      <h1 className="page-title manager-title">Manager Dashboard</h1>

      <div className="manager-grid">
        <div className="manager-card">
          <div className="card-icon">📊</div>
          <h3>Team Performance</h3>
          <p>View employee KPI performance</p>
          <a href="/manager/team-performance" className="btn">View</a>
        </div>

        <div className="manager-card">
          <div className="card-icon">📝</div>
          <h3>Reviews</h3>
          <p>View appraisal reviews</p>
          <a href="/manager/reviews" className="btn">Open</a>
        </div>

        <div className="manager-card">
          <div className="card-icon">💬</div>
          <h3>Feedback</h3>
          <p>View feedback from HR & employees</p>
          <a href="/manager/feedback" className="btn">Upload</a>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
