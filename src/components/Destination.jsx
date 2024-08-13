import React from 'react';
import PlanentsBase from './DestinationPage/PlanentsBase';
import planetEuroupe from './DestinationPage/destination/image-europa.webp';
import planentMars from './DestinationPage/destination/image-mars.webp';
import planentMoon from './DestinationPage/destination/image-moon.webp';
import planentTitan from './DestinationPage/destination/image-titan.webp';


export default function DestinationPage() {

  const btn = document.querySelectorAll('.link-item')
  const planets = document.querySelectorAll('.Planents-items')

  let navegationBar = function (manual) {
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
    item.addEventListener('click', function () {
      navegationBar(index)
    })
  })

  return (
    <section id='Destination' className='bg-img-destination fullScreen  bg-img-setters'>

      <h1 className='planent--title up--Text'><span id='number-space' className='up--Text'>01</span> Pick Your Destination</h1>
      <div className='planent-line'>
        <nav className='navegation'>
          <ul className='nav-planents'>
            <li><a className='link-item active' href='#'>Moon</a></li>
            <li><a className='link-item' href='#'>Mars</a></li>
            <li><a className='link-item' href='#'>Europa</a></li>
            <li><a className='link-item' href='#'>Titan</a></li>
          </ul>
        </nav>
      <div className='Planents-items'>
          <PlanentsBase
            classes={"Moon Destination--planent"}
            PlanetImg={planentMoon}
            name={"Moon"}
            info={"See our planet as you’ve never seen it before A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."}
          distance={"384,400 km"}
          years={"3 days"}
         />
        </div>
        <div className='Planents-items'>
          <PlanentsBase
            classes={"Mars Destination--planent"}
            PlanetImg={planentMars}
            name={"Mars"}
            info={"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"}
          distance={"225 mil. km"}
          years={"9 months"}
         />
        </div>
        <div className='Planents-items active'>
          <PlanentsBase
            classes={"Europe Destination--planent"}
            PlanetImg={planetEuroupe}
            name={"Europa"}
            info={"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."}
            distance={"628 mil. km"}
            years={"3 years"}
          />
        </div>
        <div className='Planents-items'>
          <PlanentsBase
            classes={"Titan Destination--planent"}
            PlanetImg={planentTitan}
            name={"Titan"}
            info={"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."}
            distance={"1.6 bil. km"}
            years={"7 years"}
          />
        </div>
      </div>
    </section>
  )
}