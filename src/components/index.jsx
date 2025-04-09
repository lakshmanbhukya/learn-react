// src/components/Home.jsx
import React, { useState } from "react";
import luffyimg from "../assets/luffyy.jpg";
import reactLogo from "../assets/react.svg";

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

export default function Home() {
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
    <li
      key={product.id}
      style={{ color: product.isavailable ? "green" : "red" }}
    >
      {product.name}
    </li>
  ));

  function clicked() {
    alert("Button handled here");
  }

  const [count, setCount] = useState(0);

  function countClick() {
    setCount(count + 1);
  }

  return (
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
  );
}
