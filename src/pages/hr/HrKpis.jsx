import { useState } from "react";
import API from "../../api/api";
import NavBar from "../../components/NavBar";

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
    <>
    <NavBar title="KPI" />
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <div className="card" style={{ maxWidth: "800px", display: "grid", gap: "13px", marginTop: "70px" }}>
      <h2>Create KPI</h2>

      <div>
        <input className="input" placeholder="KPI Name"/>
        <textarea className="textarea" placeholder="Description" style={{marginTop: "15px"}}></textarea>
        <button className="btn-primary" style={{marginTop: "10px"}}>Create KPI</button>
      </div>
    </div>
  </div>
  </>
);

};

export default HrKpis;
