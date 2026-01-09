import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      const data = res.data;

      // SAVE LOGIN SESSION
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("role", data.role);


      // ROLE BASED REDIRECT
      if (data.role === "HR") navigate("/hr");
      else if (data.role === "MANAGER") navigate("/manager");
      else navigate("/employee");

    } catch (err) {
      if (err.response && err.response.status === 401) {
        alert("Invalid credentials");
      } else {
        alert("Server error");
      }
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">Employee Performance Portal</h2>

        <input
          type="email"
          placeholder="Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
