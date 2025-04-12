import React, { useState } from "react";
import "../css/sendmail.css";

export default function Sendmail() {
  const [from, setFrom] = useState("lakshman");
  const [to, setTo] = useState("luffy");
  const [msg, setMsg] = useState("Owerevaaaaaaa!!!");

  function handleMessage(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`${from} said "${msg}" to ${to}`);
    }, 1000);
  }

  return (
    <div>
      <h1>Send a msg</h1>
      <form onSubmit={handleMessage}>
        <label htmlFor="to">From:</label>
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          <option value="lakshman">lakshman</option>
          <option value="luffy">luffy</option>
          <option value="traffy">traffy</option>
        </select>

        <br />

        <label htmlFor="to">To:</label>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="zoro">zoro</option>
          <option value="sanji">sanji</option>
          <option value="nami">nami</option>
        </select>

        <br />
        <label htmlFor="msg">Msg:</label>
        <textarea
          name="Message"
          placeholder="Enter your text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />

        <br />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
