import { useState } from "react";
import API from "../../api/api";

const ManagerReviews = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");
  const [success, setSuccess] = useState("");

  const submitReview = async (e) => {
    e.preventDefault();

    try {
      await API.post("/manager/review", {
        employeeId,
        rating,
        comments
      });

      setSuccess("Review submitted successfully");
      setEmployeeId("");
      setRating("");
      setComments("");
    } catch (err) {
      alert("Failed to submit review");
    }
  };

  return (
    <div className="dashboard">
      <h1>Submit Employee Review</h1>

      <form className="card review-form" onSubmit={submitReview}>
        <div className="grid-2">
          <input
            className="input"
            type="number"
            placeholder="Employee ID"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          />

          <select
            className="select"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          >
            <option value="">Rating</option>
            <option value="1">1 – Poor</option>
            <option value="2">2 – Fair</option>
            <option value="3">3 – Good</option>
            <option value="4">4 – Very Good</option>
            <option value="5">5 – Excellent</option>
          </select>
        </div>

        <textarea
          className="textarea"
          placeholder="Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />

        <div className="form-actions">
          <button className="btn btn-small" type="submit">
            Submit Review
          </button>
        </div>

        {success && <p className="success-text">{success}</p>}
      </form>
    </div>
  );
};

export default ManagerReviews;
