import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const HRDashboard = () => {
  return (
    <>
    <NavBar title="HR Dashboard" />
    <div className="dashboard page">
      <h1 className="page-title">HR Dashboard</h1>

      <div className="hr-grid">
        <div className="hr-card">
          <h3>📊 Analytics</h3>
          <p>View employee performance insights</p>
          <a href="/hr/analytics" className="btn">Open</a>
        </div>

        <div className="hr-card">
          <h3>🎯 Create KPI</h3>
          <p>Define new KPIs for employees</p>
          <a href="/hr/kpis" className="btn">Create</a>
        </div>

        <div className="hr-card">
          <h3>💬 Feedback</h3>
          <p>Give feedback to employees</p>
          <a href="/hr/feedback" className="btn">Send</a>
        </div>

        <div className="hr-card">
          <h3>📝 Appraisals</h3>
          <p>Review employee appraisals</p>
          <a href="/hr/appraisals" className="btn">Review</a>
        </div>
      </div>
    </div>
    </>
  );
};

export default HRDashboard;

