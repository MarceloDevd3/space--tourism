import React from 'react';
import CardItem from './TecItens/TecItens';
import Img1 from './technology/image-launch-vehicle-landscape.jpg';
import Img2 from './technology/image-spaceport-landscape.jpg';
import Img3 from './technology/image-space-capsule-landscape.jpg';

export default function TecSliderPage() {

    const id = React.useId()

    
  const btn = document.querySelectorAll('.tac-slider-item ')
  const slider = document.querySelectorAll('.tec-item')

    let navegaBar = function (manual) {
      btn.forEach((btnItem) => {
        btnItem.classList.remove('active')
      })
  
      slider.forEach((btnItem) => {
        btnItem.classList.remove('active')
      })
  
      btn[manual].classList.add('active')
      slider[manual].classList.add('active')
    }
  
    btn.forEach((item, index) => {
      item.addEventListener('click', function () {
        navegaBar(index)
      })
    })
  

     return (
         <section id="Tec-zone" className='bg-img-tec fullScreen  bg-img-setters'>
         <h1 className='tec--title up--Text'> <span id='num' className='up--Text'>03</span>Space launch 101</h1>
        
         <div className='container'>
          <nav className='navegation-tac'>
            <div className='tac-line text-center '>
               <button className='tac-slider-item active'><a href='#'>1</a></button>
               <button className='tac-slider-item'><a href='#'>2</a></button>
               <button className='tac-slider-item'><a href='#'>3</a></button>
            </div>
          </nav>
         <div className='tec-item active'>
           <CardItem img={Img1}   name={"Launch vehicle"} id={id} description={"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"}/>
         </div>
         <div className='tec-item'>
           <CardItem img={Img2} name={"Spacepor"} id={id} description={"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."}/>
         </div>
         <div className='tec-item '>
           <CardItem img={Img3} name={"Space capsule"} id={id} description={"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."}/>
         </div>
         </div>
         </section>
     )
}