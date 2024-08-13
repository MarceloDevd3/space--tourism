import React from 'react';

export default function DestinationInfoEurope(props) {
    return (
           <section className={props.classes}>
             <div className='destinations-info'>
               <img src={props.PlanetImg} alt="planet" className='planet ' />
             </div> 
            <div className='info text-center '>
             <h3 className='planent-name up--Text'>{props.name}</h3>
             <p className='planent--information'>{props.info}</p>
             <article className='destination-information text-center '>
             <div className='travel--time up--Text'>
              <p>Avg. distance</p>
              <p>{props.distance}</p>
             </div>  
             <div className='travel-days up--Text'>
             <p>Est. travel time</p>
             <p>{props.years}</p>
             </div>
             </article>
             
          </div>
          </section>
    )
}