import React, { useState, useEffect } from "react";
import "../css/sendmail.css";

// Move Counter outside Sendmail
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count updated");
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}

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
        <label htmlFor="from">From:</label>
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

      <h1>useEffect</h1>
      <Counter />
    </div>
  );
}
