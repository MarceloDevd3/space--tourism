import React from 'react';

import SliderItem1 from './crewSlideItem/CrewSlider1';
import SliderItem2 from './crewSlideItem/CrewSlider2';
import SliderItem3 from './crewSlideItem/CrewSlider3';
import SliderItem4 from './crewSlideItem/CrewSlider4';

export default function CrewSliderPage() {

   const btns = document.querySelectorAll('.btn-item-crew')
   const sliderItens = document.querySelectorAll('Slider-container.item')

  let navegationBar = function(manual) {
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
        navegationBar(index)
      })
  })


     return (
        <section id="Crew">
            <div className='inter-space'>
            <h1 className='crew--title'>
            <span id="number-space-crew">02</span> Meet your crew</h1>
            <div className='btn-nav'>
               <ul>
                  <li className='btn-item-crew'></li>
                  <li className='btn-item-crew'></li>
                  <li className='btn-item-crew active'></li>
                  <li className='btn-item-crew'></li>
               </ul>
            </div>
            <section className='Slider-container'>
              <div className='item'>
               <SliderItem1 />
              </div>
              <div className='item'>
               <SliderItem2 />
              </div>
              <div className='item active'>
               <SliderItem3 />
              </div>
              <div className='item'>
               <SliderItem4 />
              </div>
            </section>
            </div>
        </section>
     )
}