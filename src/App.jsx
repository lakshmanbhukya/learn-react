/*************  ✨ Windsurf Command 🌟  *************/
import React from "react";
import "./App.css";
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
};
let status = person.ismarried;
let checkmarried = {
  content: status ? "single" : "Mingle",
};
export default function App() {
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
    </div>
  );
};

/*******  b0545715-81d0-4b46-bc99-da8c746b1c7f  *******/
