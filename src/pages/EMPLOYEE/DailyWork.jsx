import { useEffect, useState } from "react";
import API from "../../api/api";

export default function DailyWork() {
  const userId = Number(localStorage.getItem("userId"));
  const [logs, setLogs] = useState([]);
  const [work, setWork] = useState({
    date: "",
    description: "",
    hours: ""
  });

  // LOAD DAILY WORK LOGS
  const loadLogs = async () => {
    if (!userId) return;

    try {
      const res = await API.get(`/employee/daily-work/${userId}`);
      setLogs(res.data);
    } catch (err) {
      console.error("Failed to load daily work logs");
    }
  };

  // SUBMIT DAILY WORK
  const submit = async () => {
    if (!work.date || !work.description || !work.hours) {
      alert("Please fill all fields");
      return;
    }

    try {
      await API.post("/employee/daily-work", {
        userId: userId,
        workDate: work.date,
        description: work.description,
        hoursWorked: Number(work.hours)
      });

      loadLogs();
      setWork({ date: "", description: "", hours: "" });

    } catch (err) {
      alert("Failed to submit work");
    }
  };

  useEffect(() => {
    loadLogs();
  }, []);

  return (
    <div className="page">
      <h2 className="page-title">Daily Work Update</h2>

      <div className="card grid-2">
        <input
          type="date"
          className="input"
          value={work.date}
          onChange={e => setWork({ ...work, date: e.target.value })}
        />

        <input
          className="input"
          placeholder="Hours worked"
          value={work.hours}
          onChange={e => setWork({ ...work, hours: e.target.value })}
        />

        <textarea
          className="textarea"
          placeholder="Work description"
          value={work.description}
          onChange={e => setWork({ ...work, description: e.target.value })}
        />

        <button className="btn" onClick={submit}>Submit</button>
      </div>

      <div className="card">
        <h3>My Work Logs</h3>
        {logs.length === 0 && <p>No work logs found</p>}

        {logs.map(l => (
          <p key={l.workId}>
            📅 {l.workDate} – {l.description} ({l.hoursWorked} hrs)
          </p>
        ))}
      </div>
    </div>
  );
}
