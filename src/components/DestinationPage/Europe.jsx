import React from 'react';
import PlanetEuroupe from '../destination/image-europa.webp';
export default function DestinationInfoEurope() {
    return (
           <section className='Europe Destination--planent'>
             <div className='destinations-info'>
               <img src={PlanetEuroupe} alt="planet" className='planet' />
             </div> 
            <div className='info'>
             <h3 className='planent-name'>Europa</h3>
             <p className='planent--information'>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
             <article className='destination-information'>
             <div className='travel--time'>
              <p>Avg. distance</p>
              <p>628 mil. km</p>
             </div>  
             <div className='travel-days'>
             <p>Est. travel time</p>
             <p>3 years</p>
             </div>
             </article>
             
          </div>
          </section>
    )
}