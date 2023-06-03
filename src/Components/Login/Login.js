import React from 'react';
import { useState } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/configauth';
import { useHistory } from 'react-router-dom';


function Login() {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let history = useHistory()

  const handleLogin = (e) => {
    e.preventDefault()


    signInWithEmailAndPassword(auth, email, password).then(() => {
      history.push('/')


    }).catch((error) => {
      alert(error.message)


    })


  }
  return (
    <div>
      <div className="loginParentDiv">
        <img alt='img' width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <br />

          <button>Login</button>
        </form>
        <a href='login' >Signup</a>
      </div>
    </div>
  );
}

export default Login;
