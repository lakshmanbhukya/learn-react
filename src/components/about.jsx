import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function About() {
  function Toolbar({ onPlayMovie, onPlayMusic }) {
    return (
      <>
        <button onClick={onPlayMovie}>playmovie</button>
        <button onClick={onPlayMusic}>onPlayMusic</button>
      </>
    );
  }
  function Callapi(){
    const [players,setpalyers]=useState("");
    const[loading,setloading]=useState(true);

    useEffect(() => {
      axios.get(`https://mocki.io/v1/1157ceb8-def8-42e5-8567-5871e6d539eb`)
      .then(res =>{
        setpalyers(res.data);
        setloading(false);
      })

      .catch((error)=>{
      console.log(`error in fetching data :`,error);
      setloading(false);
      });
    }, []);
    if(loading)
    {
      return <p>Loading.. API data </p>
    }
    return (
      <div className="div" style={{
padding:"1rem"
      }}>
        <h1>Bluelock Player info</h1>
        {players.map((player)=>(
          <div key={player.id}
          style={{
            border:'1px solid #ccc',
            borderRadius:'10px',
            padding:'1rem',
            marginBottom:'1rem',
            background:'#f9f9f9'
          }}
          >
            <h2>{player.name}</h2>
            <p><strong>ID:</strong> {player.id}</p>
          <p><strong>Position:</strong> {player.position}</p>
          <p><strong>Team:</strong> {player.team}</p>
          <p><strong>Jersey Number:</strong> {player.jerseyNumber}</p>
          <p><strong>Skills:</strong></p>
          <ul>
            {player.skills.map((skill, index) => (
              <li key={index}>🔹 {skill}</li>
            ))}
          </ul>
          </div>

        ))}

      </div>
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
      <h1>learning useEffect</h1>
      <Callapi />
      
    </>
  );
}
