import React from 'react';

export default function DestinationInfoEurope(props) {
    return (
           <section className={props.classes}>
             <div className='destinations-info'>
               <img src={props.PlanetImg} alt="planet" className='planet' />
             </div> 
            <div className='info'>
             <h3 className='planent-name'>{props.name}</h3>
             <p className='planent--information'>{props.info}</p>
             <article className='destination-information'>
             <div className='travel--time'>
              <p>Avg. distance</p>
              <p>{props.distance}</p>
             </div>  
             <div className='travel-days'>
             <p>Est. travel time</p>
             <p>{props.years}</p>
             </div>
             </article>
             
          </div>
          </section>
    )
}