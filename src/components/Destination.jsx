import React from 'react';
import Moon from './DestinationPage/Moon';
import Europa from './DestinationPage/Europe';
import Mars from './DestinationPage/Mars';
import Titan from './DestinationPage/Titan';

export default function DestinationPage() {
  return (
      <div id='Destination'>
        <div className='planent-line'>
        <nav className='navegation'>
          <ul>
             <li className='link'><a href='#'>Moon</a></li>
             <li className='link'><a href='#'>Mars</a></li>
             <li className='link'><a href='#'>Europa</a></li>
             <li className='link'><a href='#'>Titan</a></li>
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