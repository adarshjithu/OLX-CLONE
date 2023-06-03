import React from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './App.css';
import { Appcontext } from './firebase/Appcontext';
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';

import { useState } from 'react';
import { Route } from 'react-router-dom';
import Post from './firebase/postContext';



/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Components/View/View';


function App() {


  const [profile, setProfile] = useState()
  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {

      setProfile(user)


    })
  }, [])
  return (

    <div>
      {console.log('this is the profile element', profile)}
      <Appcontext.Provider value={profile}>

<Post>

        <Router>
          <Route exact path={'/'}>
            <Home />
          </Route>
          <Route path={'/signup'}>
            <Signup />
          </Route>
          <Route path={'/login'}>
            <Login />
          </Route>
          <Route path={'/create'}>
            <Create />
          </Route>
          


            <Route path={'/view'}>
              <View />
            </Route>
          
        </Router>



        </Post>
      </Appcontext.Provider>

    </div>
  );
}

export default App;
