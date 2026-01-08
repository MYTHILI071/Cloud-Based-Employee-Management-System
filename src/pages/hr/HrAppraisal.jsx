import { useState } from "react";

const HrAppraisals = () => {
  const [appraisals] = useState([
    { employee: "Arun V.", rating: 4, comments: "Good performance" },
    { employee: "Kavya P.", rating: 5, comments: "Excellent work" }
  ]);

 return (
  <div className="page">
    <h2 className="page-title" style={{ marginTop: "20px" }}>
      Employee Appraisal
    </h2>

    <div
      className="card"
      style={{ maxWidth: "850px", margin: "30px auto 0" }}
    >
      <input
        className="input"
        placeholder="Employee ID"
        style={{ marginTop: "10px" }}
      />

      <label style={{ marginTop: "18px", display: "block" }}>
        Technical Skills
      </label>
      <select className="input" style={{ marginTop: "8px" }}>
        
        <option value="">Rating</option>
            <option value="1">1 – Poor</option>
            <option value="2">2 – Fair</option>
            <option value="3">3 – Good</option>
            <option value="4">4 – Very Good</option>
            <option value="5">5 – Excellent</option>
      </select>

      <label style={{ marginTop: "18px", display: "block" }}>
        Communication
      </label>
      <select className="input" style={{ marginTop: "8px" }}>
        <option value="">Rating</option>
            <option value="1">1 – Poor</option>
            <option value="2">2 – Fair</option>
            <option value="3">3 – Good</option>
            <option value="4">4 – Very Good</option>
            <option value="5">5 – Excellent</option>
      </select>

      <label style={{ marginTop: "18px", display: "block" }}>
        Team Work
      </label>
      <select className="input" style={{ marginTop: "8px" }}>
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
        style={{ marginTop: "18px" }}
      />

      <div className="form-actions" style={{ marginTop: "20px" }}>
        <button className="btn btn-small">
          Submit Appraisal
        </button>
      </div>
    </div>
  </div>
);

};

export default HrAppraisals;
