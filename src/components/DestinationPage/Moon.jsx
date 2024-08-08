import React from 'react';
import PlanentMoon from '../destination/image-moon.webp';
export default function DestinationInfoMoon() {
    return (
          <section className='Moon Destination--planent'>
          <div className='destinations-info'>
               <img src={PlanentMoon} alt="planet" className='planet'/>
          </div>
          <div className='info'>
             <h3 className='planent-name'>Moon</h3>
             <p className='planent--information'>See our planet as you’ve never seen it before.
               A perfect relaxing trip away to help regain perspective and come
               back refreshed. While you’re there, take in some history by visiting 
               the Luna 2 and Apollo 11 landing sites.</p>
              <article  className='destination-information'>
              <div className='travel--time'>
             <p>Avg. distance</p>
             <p>384,400 km</p>
             </div>  
             <div className='travel-days'>
             <p>Est. travel time</p>
             <p>3 days</p>
             </div>
              </article>
            
          </div>
          </section>
    )
}