import React, { useState, useEffect } from "react";

function UserData({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!userId) return;

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("API error:", err));
  }, [userId]); // Re-run effect when userId changes

  return (
    <div>
      <h3>User Info</h3>
      {user ? (
        <p>
          {user.name} - {user.email}
        </p>
      ) : (
        <p>Loading or Invalid User ID</p>
      )}
    </div>
  );
}

export default function App() {
  const [inputId, setInputId] = useState("");
  const [userId, setUserId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserId(inputId); // Trigger API call by updating userId
  };

  return (
    <div>
      <h1>Fetch User Data</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter User ID (1–10): </label>
        <input
          type="number"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          min="1"
          max="10"
        />
        <button type="submit">Fetch</button>
      </form>

      {userId && <UserData userId={userId} />}
    </div>
  );
}
