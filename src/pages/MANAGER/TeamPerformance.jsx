import { useEffect, useState } from "react";
import API from "../../api/api";
import NavBar from "../../components/NavBar";

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
    <>
    <NavBar title="Performance" />
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      className="dashboard page"
      style={{
        width: "100%",
        maxWidth: "900px",
        textAlign: "center"
      }}
    >
      <h1 className="page-title">Team Performance</h1>

      {loading && <p>Loading team data...</p>}
      {error && <p className="error-text">{error}</p>}

      {!loading && !error && (
        <div
          className="card"
          style={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "center"
          }}
        >
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
  </div>
  </>
);

};

export default TeamPerformance;
