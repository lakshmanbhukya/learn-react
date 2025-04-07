import React from "react";
import { useState } from "react";
import "./App.css";
import luffyimg from "./assets/luffyy.jpg";
function MyButton() {
  return <button>Button</button>;
}
const person = {
  name: "lakshman",
  age: 19,
  gender: "male",
  imageurl: "./src/assets/react.svg",
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
// Rendering lists
const products = [
  { id: 1, name: "Apple", weight: 100, isavailable: true },
  { id: 2, name: "banana", weight: 100, isavailable: false },
  { id: 3, name: "watermelon", weight: 100, isavailable: true },
  { id: 4, name: "mango", weight: 100, isavailable: false },
  { id: 5, name: "sapota", weight: 100, isavailable: true },
];
const porductitems = products.map((product) => (
  <li key={product.id} style={{ color: product.isavailable ? "green" : "red" }}>
    {product.name}
  </li>
));
//Responding to events
function clicked() {
  alert("Button handled here");
}
function PlaceImge() {
  return (
    <img
      src={luffyimg}
      alt="luffy"
      style={{ width: "400px", height: "250px",margin:"10px"}}
    />
  );
}
export default function App() {
  const [count, setcount] = useState(0);
  function countclick() {
    setcount(count + 1);
  }
  return (
    <div>
      <h1>hello world</h1>
      <MyButton />
      <br />
      <MyButton />
      <br />
      <img
        src={person.imageurl}
        alt={"loading.."}
        style={{ width: person.imagessize, height: person.imagessize }}
      />
      <h1>{checkmarried.content}</h1>
      <h1>{laptopcontent.contentlist}</h1>
      <ul type="none">{porductitems}</ul>
      {/* //React will call your component function again. This time, count will be 1. Then it will be 2. And so on.

If you render the same component multiple times, each will get its own state. Click each button separately */}
      <button onClick={clicked}>Click Me !!</button>
      {/* <button onClick={countclick}>button click : {count}</button> */}
      <h1> count both at the same time</h1>
      <MyButton count={count} onClick={countclick} />
      <MyButton count={count} onClick={countclick} />
      <div>
        <div className="gallery">{PlaceImge()} {PlaceImge()}{PlaceImge()}</div>
      </div>
    </div>
  );
  function MyButton({ count, onClick }) {
    return <button onClick={onClick}> count {count}</button>;
  }
}
