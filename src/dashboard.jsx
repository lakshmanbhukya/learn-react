import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored authentication data
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Dashboard</h1>
      <div
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <h2>User Information</h2>
        <p>This is a protected dashboard page.</p>
        <button
          onClick={handleLogout}
          style={{
            padding: "10px 20px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
