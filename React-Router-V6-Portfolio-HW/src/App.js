import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Profile from './components/Profile';
import ContactMe from './components/ContactMe';
import Login from './components/Login';
import Skills from './components/Skills';
import Signup from './components/Signup';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import all of your components to use them


//Guide: In your App.js return below: 
// return (
//   <div className="App">
  //Put your nav bar first with <Link> components
  //Put your <Route> components after
//   </div>
// );


function App() {




  return (
    <div className="App">
    
    <Router>



<nav>
  
            <Link to="/contactme">Contact me</Link>&nbsp;
            <Link to="/about">About</Link>&nbsp;
            <Link to ="/">Sign Up</Link>&nbsp;
  <Link to ="/login">Login</Link>&nbsp;
  <Link to ="/profile">Profile</Link>&nbsp;
  <Link to ="/skills">Skills</Link>&nbsp;


</nav>


 



<Routes>

<Route path="/contactme" element={<ContactMe></ContactMe> }></Route>
     <Route path="/profile" element={<Profile></Profile>}></Route>
     <Route path="/about" element={<About></About>}></Route>
     <Route path="/skills" element={<Skills></Skills>}></Route>
     <Route path="/" element={<Signup></Signup>}></Route>
     <Route path="/login" element={<Login></Login>}></Route>
</Routes>

</Router>

    </div>
  );
}

export default App;
