import { useState } from "react";
import API from "../../api/api";

const HrFeedback = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [toUserId, setToUserId] = useState("");
  const [message, setMessage] = useState("");

  const submitFeedback = () => {
    API.post("/feedback", {
      fromUserId: user.userId,
      toUserId,
      feedbackText: message
    }).then(() => {
      setToUserId("");
      setMessage("");
      alert("Feedback sent");
    });
  };

  return (
    <div className="card" style={{ maxWidth: "800px", display: "grid", gap: "16px", marginTop: "20px" }}>
    <h2>HR Feedback</h2>

    <div>
      <input className="input" placeholder="Employee ID" />
      <textarea className="textarea" placeholder="Enter feedback"></textarea>
      <button className="btn-primary">Send Feedback</button>
    </div>
</div>

  );
};

export default HrFeedback;
