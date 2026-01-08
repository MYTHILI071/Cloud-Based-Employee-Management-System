import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import API from "../../api/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const HrAnalytics = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const res = await API.get("/hr/analytics");
      setData(res.data);
      setError("");
    } catch (err) {
      setError("Failed to load analytics data");
    } finally {
      setLoading(false);
    }
  };

return (
  <>
  <NavBar title="Analytics" />
  <div className="card" style={{ width: "520px", marginTop:"20px" }}>
    <h2 style={{ marginBottom: "20px" }}>HR Analytics Dashboard</h2>

    <div  style={{width: "100%",height: "350px", marginTop: "30px"}}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="employeeName" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="score" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
  </>
);

};

export default HrAnalytics;
