import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/Home';
import Destination from './components/Destination';
import CrewSliderPage from './components/crew/CrowSlide';
import TecSliderPage from './components/Tec/Tecnology';
import './style.css';
import './mobile.css';
import './tablet.css';
import './desktop.css';
function App() {
  return (
    <> 
       <Router>
           <Navbar/>
           <Routes >
               <Route exact path='/' Component={Home}></Route>
               <Route path='/Destination' Component={Destination}></Route>
               <Route path='/CrowSlide' Component={CrewSliderPage}></Route>
               <Route path='/Tecnology' Component={TecSliderPage}></Route>
           </Routes>
       </Router>
    </>
  )
}

export default App
