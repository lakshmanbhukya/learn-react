import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login(){
  const APIURL="XXXXXXXXXXXXXXXXXXXXXXXXXXX";
  const [email,Setemail]=useState("");
  const [password,Setpassword]=useState("");
  const navigate=useNavigate();
  const handleLogin=async(e)=>{
    e.preventDefault();
    try{
      const response=await axios.post("APIURL",{email,password});
      console.log(response.data);
      localStorage.setItem("isAuthenticated",true);
      navigate("/dashboard");
    }catch(error){
      console.error(error);
    }
  }
  return(
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>Setemail(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>Setpassword(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;