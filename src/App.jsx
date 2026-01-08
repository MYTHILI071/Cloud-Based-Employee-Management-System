import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

import HRDashboard from "./pages/HRDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import EmployeeDashboard from "./pages/EMPLOYEE/EmployeeDashboard";
import DailyWork from "./pages/EMPLOYEE/DailyWork";

import HrKpis from "./pages/hr/HrKpis";
import HrAppraisals from "./pages/hr/HrAppraisal";
import HrFeedback from "./pages/hr/HrFeedback";
import HrAnalytics from "./pages/hr/HrAnalytics";

import TeamPerformance from "./pages/MANAGER/TeamPerformance";
import ManagerReviews from "./pages/MANAGER/ManagerReviews";
import ManagerFeedback from "./pages/MANAGER/ManagerFeedback";

import ProtectedRoute from "./auth/ProtectedRoute";
import "./styles/AppBackground.css";

function App() {
  return (
    <div className="app-container">
      <Routes>

        <Route path="/" element={<Login />} />

        {/* HR */}
        <Route
          path="/hr"
          element={
            <ProtectedRoute role="HR">
              <HRDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/hr/kpis" element={<ProtectedRoute role="HR"><HrKpis /></ProtectedRoute>} />
        <Route path="/hr/appraisals" element={<ProtectedRoute role="HR"><HrAppraisals /></ProtectedRoute>} />
        <Route path="/hr/feedback" element={<ProtectedRoute role="HR"><HrFeedback /></ProtectedRoute>} />
        <Route path="/hr/analytics" element={<ProtectedRoute role="HR"><HrAnalytics /></ProtectedRoute>} />

        {/* MANAGER */}
        <Route
          path="/manager"
          element={
            <ProtectedRoute role="MANAGER">
              <ManagerDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/manager/team-performance" element={<ProtectedRoute role="MANAGER"><TeamPerformance /></ProtectedRoute>} />
        <Route path="/manager/reviews" element={<ProtectedRoute role="MANAGER"><ManagerReviews /></ProtectedRoute>} />
        <Route path="/manager/feedback" element={<ProtectedRoute role="MANAGER"><ManagerFeedback /></ProtectedRoute>} />

        {/* EMPLOYEE */}
        <Route
          path="/employee"
          element={
            <ProtectedRoute role="EMPLOYEE">
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/daily-work" element={<ProtectedRoute role="EMPLOYEE"><DailyWork /></ProtectedRoute>} />

      </Routes>
    </div>
  );
}

export default App;
