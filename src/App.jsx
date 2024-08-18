import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import Home from './components/HomePag/Home';
import Destination from './components/DestinationPage/Destination';
import CrewSliderPage from './components/crew/CrowSlide';
import TecSliderPage from './components/Tec/Tecnology';

import './css/style.css';
import './css/mobile.css';
import './css/tablet.css';
import './css/desktop.css';
export default function App() {
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

