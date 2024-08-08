import React from 'react';
import PlanentMars from '../destination/image-mars.webp';
export default function DestinationInfoMars() {
    return (
        <section className='Mars Destination--planent'>
        <div className='destinations-info'>
               <img src={PlanentMars} alt="planet" className='planet' />
          </div>  
        <div className='info'>
             <h3 className='planent-name'>Mars</h3>
             <p className='planent--information'>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
             the tallest planetary mountain in our solar system.
              It’s two and a half times the size of Everest!</p>
             <article className='destination-information'>
             <div className='travel--time'>
             <p>Avg. distance</p>
             <p>225 mil. km</p>
             </div>  
             <div className='travel-days'>
             <p>Est. travel time</p>
             <p>9 months</p>
             </div>
             </article>
          </div>
        </section> 
    )
}