import { useState } from "react";
import API from "../../api/api";
import NavBar from "../../components/NavBar";

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
    <>
    <NavBar title="Feedback" />
  <div
    className="page"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        textAlign: "center"
      }}
    >
      <h2 className="page-title">Give Feedback</h2>

      <div
        className="card"
        style={{
          margin: "0 auto"
        }}
      >
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
  </div>
  </>
);

}
