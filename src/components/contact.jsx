import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${name} Age ${age} email ${email}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit} align="center">
        <label htmlFor="name">name :</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> <br/><br/>
        <label htmlFor="age">age :</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        /><br/><br/>
        <label htmlFor="email">email :</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>
        <label htmlFor="password">password :</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/>
        <button type="submit">Greet !!</button>
      </form>
    </>
  );
}
