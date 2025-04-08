import React, { useState } from "react";
import "./App.css";
import luffyimg from "./assets/luffyy.jpg";
import reactLogo from "./assets/react.svg";
import IndexApp from "./components/index.jsx"; // Fixed import name to match component
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const person = {
  name: "lakshman",
  age: 19,
  gender: "male",
  imageurl: reactLogo,
  imagessize: 90,
  ismarried: false,
  hasLaptop: true,
};

let status = person.ismarried;
let checkmarried = {
  content: status ? "single" : "Mingle",
};

let laptop = person.hasLaptop;
let laptopcontent = {
  contentlist: laptop ? "Laptop" : "Buy Laptop",
};

const products = [
  { id: 1, name: "Apple", weight: 100, isavailable: true },
  { id: 2, name: "banana", weight: 100, isavailable: false },
  { id: 3, name: "watermelon", weight: 100, isavailable: true },
  { id: 4, name: "mango", weight: 100, isavailable: false },
  { id: 5, name: "sapota", weight: 100, isavailable: true },
];

const productItems = products.map((product) => (
  <li key={product.id} style={{ color: product.isavailable ? "green" : "red" }}>
    {product.name}
  </li>
));

function clicked() {
  alert("Button handled here");
}

function PlaceImage() {
  return (
    <img
      src={luffyimg}
      alt="luffy"
      style={{ width: "400px", height: "250px", margin: "10px" }}
    />
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}> count {count}</button>;
}

export default function App() {
  const [count, setCount] = useState(0);

  function countClick() {
    setCount(count + 1);
  }

  return (
    <Router>
      <div>
        <nav
          style={{
            padding: "10px",
            background: "#f0f0f0",
            marginBottom: "20px",
          }}
        >
          <Link to="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link to="/indexpage" style={{ marginRight: "10px" }}>
            Index Page
          </Link>
          <Link to="/about" style={{ marginRight: "10px" }}>
            About
          </Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>hello world</h1>
                <MyButton onClick={clicked} />
                <br />
                <MyButton onClick={clicked} />
                <br />
                <img
                  src={person.imageurl}
                  alt={"loading.."}
                  style={{
                    width: person.imagessize,
                    height: person.imagessize,
                  }}
                />
                <h1>{checkmarried.content}</h1>
                <h1>{laptopcontent.contentlist}</h1>
                <ul type="none">{productItems}</ul>
                <button onClick={clicked}>Click Me !!</button>
                <h1> count both at the same time</h1>
                <MyButton count={count} onClick={countClick} />
                <MyButton count={count} onClick={countClick} />
                <div>
                  <div className="gallery">
                    <PlaceImage />
                    <PlaceImage />
                    <PlaceImage />
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/indexpage" element={<IndexApp />} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Routes>
      </div>
    </Router>
  );
}
