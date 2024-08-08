import React from 'react';
import PlanentTitan from '../destination/image-titan.webp';
export default function DestinationInfoTitan() {
    return (
          <section className='Titan Destination--planent'>
          <div className='destinations-info'>
               <img src={PlanentTitan} alt="planet" className='planet'  />
          </div>
          <div className='info'>
             <h3 className='planent-name'>Titan</h3>
             <p className='planent--information'>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
            <article className='destination-information'>
            <div className='travel--time'>
             <p>Avg. distance</p>
             <p>1.6 bil. km</p>
             </div>  
             <div className='travel-days'>
             <p>Est. travel time</p>
             <p>7 years</p>
             </div>
            </article>
          </div>
          </section> 
    )
}