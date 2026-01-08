import { useState } from "react";
import API from "../../api/api";

const HrKpis = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const submitKpi = () => {
    API.post("/hr/kpi", {
      kpiName: name,
      description: desc
    }).then(() => {
      setName("");
      setDesc("");
      alert("KPI Created");
    });
  };

  return (
    <div className="card" style={{ maxWidth: "800px",display: "grid", gap: "13px", marginTop: "20px"  }}>
    <h2>Create KPI</h2>

    <div>
      <input className="input" placeholder="KPI Name" />
      <textarea className="textarea" placeholder="Description"></textarea>
      <button className="btn-primary">Create KPI</button>
    </div>
    </div>
  );
};

export default HrKpis;
