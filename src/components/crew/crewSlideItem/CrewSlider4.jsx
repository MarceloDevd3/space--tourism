import React from 'react';
import anoushehAnsari from '../img/crew/image-anousheh-ansari.png';
export default function CrewSlider() {
    return (
        <sectio className="Slider-Item">
            <div className='Crew-MemberImage'>
                <img src={anoushehAnsari} alt="crew-image" />
            </div>
            <div className='Crew-info'>
               <h2 className="member-job">Flight Engineer</h2>
               <h3 className="member-name">Anousheh Ansari</h3>
               <p className="member-information">Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
            </div>
        </sectio>
    )
}