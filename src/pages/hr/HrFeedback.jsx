import { useState } from "react";
import API from "../../api/api";
import NavBar from "../../components/NavBar";

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
  <>
  <NavBar title="Feedback" />
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
    <div className="card" style={{ maxWidth: "800px", display: "grid", gap: "10px", marginTop: "70px" }}>
      <h2>HR Feedback</h2>

      <div>
        <input className="input" placeholder="Employee ID" />
        <textarea className="textarea" placeholder="Enter feedback" style={{marginTop:"10px"}}></textarea>
        <button className="btn-primary" style={{marginTop:"10px"}}>Send Feedback</button>
      </div>
    </div>
  </div>
  </>
);
};

export default HrFeedback;
