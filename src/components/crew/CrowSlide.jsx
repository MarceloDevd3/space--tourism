import React from 'react';

import SliderItem1 from './crewSlideItem/CrewSlider1';
import SliderItem2 from './crewSlideItem/CrewSlider2';
import SliderItem3 from './crewSlideItem/CrewSlider3';
import SliderItem4 from './crewSlideItem/CrewSlider4';

export default function CrewSliderPage() {
     return (
        <section id="Crew">
            <h1 className='crew--title'>
            02 Meet your crew</h1>
            <div className='btn-nav'>
               <ul>
                  <li className='btn-item-crew'></li>
                  <li className='btn-item-crew'></li>
                  <li className='btn-item-crew'></li>
                  <li className='btn-item-crew'></li>
               </ul>
            </div>
            <section className='Slider-container'>
              <div className='item active'>
               <SliderItem1 />
              </div>
              <div className='item'>
               <SliderItem2 />
              </div>
              <div className='item'>
               <SliderItem3 />
              </div>
              <div className='item'>
               <SliderItem4 />
              </div>
            </section>
        </section>
     )
}