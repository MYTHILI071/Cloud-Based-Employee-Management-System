import { useState } from "react";
import API from "../../api/api";

export default function ManagerFeedback() {
  const [employeeId, setEmployeeId] = useState("");
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState("");

  const submitFeedback = async () => {
    try {
      await API.post("/manager/feedback", {
        employeeId,
        feedback
      });
      setStatus("Feedback sent successfully ✅");
      setEmployeeId("");
      setFeedback("");
    } catch {
      setStatus("Failed to send feedback ❌");
    }
  };

  return (
    <div className="page">
      <h2 className="page-title">Give Feedback</h2>

      <div className="card">
        <input
          className="input"
          placeholder="Employee ID"
          value={employeeId}
          onChange={e => setEmployeeId(e.target.value)}
        />

        <textarea
          className="textarea"
          placeholder="Write feedback..."
          rows={4}
          value={feedback}
          onChange={e => setFeedback(e.target.value)}
        />

        <button className="btn" onClick={submitFeedback}>
          Send Feedback
        </button>

        {status && <p style={{ marginTop: 12 }}>{status}</p>}
      </div>
    </div>
  );
}
