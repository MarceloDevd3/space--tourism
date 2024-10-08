import React from 'react';
import SliderItem from './crewSlideItem/CrewSlideBase';
import DouglasHurley from './img/crew/image-douglas-hurley.png';
import markShuttleworth from './img/crew/image-mark-shuttleworth.png';
import victorGlover from './img/crew/image-victor-glover.png';
import anoushehAnsari from './img/crew/image-anousheh-ansari.png';

export default function CrewSliderPage() {


   const btns = document.querySelectorAll('.btn-item-crew')
   const sliderItens = document.querySelectorAll('.item')

  function CrewNavBar(manual) {
     btns.forEach((btnItem) => {
      btnItem.classList.remove('active')
     })

     sliderItens.forEach((btnItem) => {
      btnItem.classList.remove('active')
     })

     btns[manual].classList.add('active')
     sliderItens[manual].classList.add('active')
  }

     btns.forEach((item, index) => {
      item.addEventListener('click', function() {
         CrewNavBar(index)
      })
  })

  
     return (
        <section id="Crew" className='bg-img-crew fullScreen bg-img-setters'>
            <div className='inter-space'>
            <h1 className='crew--title up--Text'>
            <span id="number-space-crew" className='up--Text'>02</span> Meet your crew</h1>
            <div className='btn-nav'>
                  <button className='btn-item-crew'><a href='#'>1</a></button>
                  <button className='btn-item-crew'><a href='#'>1</a></button>
                  <button className='btn-item-crew active'><a href='#'>1</a></button>
                  <button className='btn-item-crew'><a href='#'>1</a></button>
            </div>
            <section className='Slider-container'>
              <div className='item'> 
               <SliderItem
                 CrewImg={DouglasHurley}
                 classes={"space-man fix-man"}
                 job={'Commander'}
                 name={'Douglas Hurley'}
                 info={"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."}
                />
              </div>
              <div className='item'>
              <SliderItem
                 CrewImg={markShuttleworth}
                 classes={"space-man"}
                 job={"Mission Specialist"}
                 name={"Mark Shuttleworth"}
                 info={"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."}
                />
              </div>
              <div className='item active'>
              <SliderItem
                 CrewImg={victorGlover}
                 classes={"space-man"}
                 job={"Pilot"}
                 name={"Victor Glover"}
                 info={"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."}
                />
              </div>
              <div className='item'>
              <SliderItem
                 CrewImg={anoushehAnsari}
                 classes={"fix-space space-man"}
                 job={"Flight Engineer"}
                 name={"Anousheh Ansari"}
                 info={"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."}
                />
              </div>
            </section>
            </div>
        </section>
     )
}