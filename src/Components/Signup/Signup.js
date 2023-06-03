import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Logo from '../../olx-logo.png';
import './Signup.css';
import { Firebase } from '../../firebase/config';

import 'firebase/compat/firestore'
import { useHistory } from 'react-router-dom';
import { getAuth, updateProfile } from 'firebase/auth';






export default function Signup() {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [passworderror, setPassworderror] = useState('')
  const auth = getAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password.length < 6) { setPassworderror('Password must be 6 or above charectors') }
    else { setPassworderror('') }


    try {
      await createUserWithEmailAndPassword(auth, email, password).then((result) => {

        updateProfile(auth.currentUser, { displayName: username })
        console.log(result)
        Firebase.firestore().collection('users').add({
          id: result.user.uid,
          username: username,
          phone: phone


        }).then(() => {
          console.log('pandaram')
          history.push('/login')
        })

      })


    } catch (error) {
      console.log(error)
    }




  }

  return (
    <div>
      <div className="signupParentDiv">
        <img alt='imgage' width="200px" height="200px" src={Logo}></img>

        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />


          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />


          <br />
          <label htmlFor="lname">Password <br />{passworderror ? <span className='error'>{passworderror}</span> : ''}</label>
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
          <button>Signup</button>
        </form>
        <a href='/login'>Login</a>
      </div>
    </div>
  );
}
