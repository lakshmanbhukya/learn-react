import React, { useState } from "react";
import "../css/contact.css";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Stored:", formData);
    alert(`Hello ${formData.name}! Your form is stored successfully.`);
  };

  return (
    <>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <h4>Stored Data:</h4>
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Age:</strong> {formData.age}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Password:</strong> {formData.password}
        </p>
      </div>
    </>
  );
}
