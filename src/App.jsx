import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './components/Home'
import Destination from './components/Destination';

import './style.css';
function App() {
  return (
    <> 
       <Router>
           <Navbar/>
           <Routes >
               <Route exact path='/' Component={Home}></Route>
               <Route path='/Destination' Component={Destination}></Route>
           </Routes>
       </Router>
    </>
  )
}

export default App
