import React, { useState } from "react";
import API from "../api/api";

const ManageKPI = () => {
  const [kpi, setKpi] = useState("");

  const addKPI = async () => {
    await API.post("/kpi", { name: kpi });
    alert("KPI Added Successfully");
  };

  return (
    <div>
      <h2>Manage KPIs</h2>
      <input
        placeholder="Enter KPI"
        onChange={(e) => setKpi(e.target.value)}
      />
      <button onClick={addKPI}>Add KPI</button>
    </div>
  );
};

export default ManageKPI;
