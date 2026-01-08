import { useEffect, useState } from "react";
import API from "../../api/api";

const TeamPerformance = () => {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    API.get("/manager/team-performance")
      .then(res => {
        setTeamData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load team performance");
        setLoading(false);
      });
  }, []);

  return (
    <div className="dashboard page">
  <h1 className="page-title">Team Performance</h1>

  {loading && <p>Loading team data...</p>}
  {error && <p className="error-text">{error}</p>}

  {!loading && !error && (
    <div className="card">
      <table className="data-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>KPI</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {teamData.map((item, index) => (
            <tr key={index}>
              <td>{item.employeeName}</td>
              <td>{item.kpiName}</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>
  );
};

export default TeamPerformance;
