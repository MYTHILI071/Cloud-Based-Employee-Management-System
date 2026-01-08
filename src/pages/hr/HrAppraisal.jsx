import { useState } from "react";
import NavBar from "../../components/NavBar";

const HrAppraisals = () => {
  const [appraisals] = useState([
    { employee: "Arun V.", rating: 4, comments: "Good performance" },
    { employee: "Kavya P.", rating: 5, comments: "Excellent work" }
  ]);

 return (
  <>
  <NavBar title="Appraisal" />
  <div className="page">
    <h2 className="page-title" style={{ marginTop: "1px" }}>
      Employee Appraisal
    </h2>

    <div
      className="card"
      style={{ maxWidth: "850px", margin: "10px auto 0" }}
    >
      <input
        className="input"
        placeholder="Employee ID"
        style={{ marginTop: "1px" }}
      />

      <label style={{ marginTop: "1px", display: "block" }}>
        Technical Skills
      </label>
      <select className="input" style={{ marginTop: "1px" }}>
        
        <option value="">Rating</option>
            <option value="1">1 – Poor</option>
            <option value="2">2 – Fair</option>
            <option value="3">3 – Good</option>
            <option value="4">4 – Very Good</option>
            <option value="5">5 – Excellent</option>
      </select>

      <label style={{ marginTop: "1px", display: "block" }}>
        Communication
      </label>
      <select className="input" style={{ marginTop: "1px" }}>
        <option value="">Rating</option>
            <option value="1">1 – Poor</option>
            <option value="2">2 – Fair</option>
            <option value="3">3 – Good</option>
            <option value="4">4 – Very Good</option>
            <option value="5">5 – Excellent</option>
      </select>

      <label style={{ marginTop: "1px", display: "block" }}>
        Team Work
      </label>
      <select className="input" style={{ marginTop: "1px" }}>
        <option value="">Rating</option>
            <option value="1">1 – Poor</option>
            <option value="2">2 – Fair</option>
            <option value="3">3 – Good</option>
            <option value="4">4 – Very Good</option>
            <option value="5">5 – Excellent</option>
      </select>

      <textarea
        className="textarea"
        placeholder="Appraisal comments"
        style={{ marginTop: "5px" }}
      />

      <div className="form-actions" style={{ marginTop: "5px" }}>
        <button className="btn btn-small">
          Submit Appraisal
        </button>
      </div>
    </div>
  </div>
  </>
);

};

export default HrAppraisals;
