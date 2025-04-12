import React from "react";

export default function About() {
  function Toolbar({ onPlayMovie, onPlayMusic }) {
    return (
      <>
        <button onClick={onPlayMovie}>playmovie</button>
        <button onClick={onPlayMusic}>onPlayMusic</button>
      </>
    );
  }
  return (
    <>
      <div className="text-center p-10"></div>
      <h1 className="text-3xl font-bold text-blue-600">About Page </h1>
      <p>You are routed to About Page </p>
      <h3>Thank you !! </h3>
      <Toolbar
        onPlayMovie={() => alert("playing movie")}
        onPlayMusic={() => alert("Playing Music ")}
      />
    </>
  );
}
