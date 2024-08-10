import React from 'react';
import Moon from './DestinationPage/Moon';
import Europa from './DestinationPage/Europe';
import Mars from './DestinationPage/Mars';
import Titan from './DestinationPage/Titan';

export default function DestinationPage() {

const btn = document.querySelectorAll('.link-item')
const planets = document.querySelectorAll('.Planents-items')

  let navegationBar = function(manual) {
     btn.forEach((btnItem) => {
      btnItem.classList.remove('active')
     })

     planets.forEach((btnItem) => {
      btnItem.classList.remove('active')
     })

     btn[manual].classList.add('active')
     planets[manual].classList.add('active')
  }

  btn.forEach((item, index) => {
      item.addEventListener('click', function() {
        navegationBar(index)
      })
  })

  return (
      <div id='Destination'>

      <h1 className='planent--title'><span id='number-space'>01</span> Pick Your Destination</h1>
        <div className='planent-line'>
        <nav className='navegation'>
          <ul>
             <li className='link-item active'><a href='#'>Moon</a></li>
             <li className='link-item'><a href='#'>Mars</a></li>
             <li className='link-item'><a href='#'>Europa</a></li>
             <li className='link-item'><a href='#'>Titan</a></li>
          </ul>
         </nav>
        <div className='Planents-items'>
        <Moon/>
        </div>
        <div className='Planents-items'>
        <Mars/>
        </div>
        <div className='Planents-items active'>
        <Europa/>
        </div>
        <div className='Planents-items'>
        <Titan/>
        </div>
        </div>
      </div>
  )
}