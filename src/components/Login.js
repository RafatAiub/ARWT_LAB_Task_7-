import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";


//import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function Login() {
  const history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history("/add");
    }

  }, [])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function login() {
    let item = { email, password };

    let result = await fetch("http://127.0.0.1:8000/api/signin",
      {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        }
      })

    result = await result.json();

    localStorage.setItem("user-info", JSON.stringify(result));
    history("/add")



  }

  return (
    <div>
      <Header />

      <div className="col-sm-6 offset-sm-3" >

        <h1>Login</h1>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" /> <br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" /> <br />
        <button onClick={login} className="btn btn-primary">Login</button>
      </div>
    </div>
  );
}

export default Login;