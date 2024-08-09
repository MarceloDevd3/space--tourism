import React from 'react';
import DouglasHurley from '../img/crew/image-douglas-hurley.png';
export default function CrewSlider() {
    return (
        <sectio className="Slider-Item">
            <div className='Crew-MemberImage'>
                <img src={DouglasHurley} alt="crew-image" />
            </div>
            <div className='Crew-info'>
               <h2 className="member-job">Commander</h2>
               <h3 className="member-name">Douglas Hurley</h3>
               <p className="member-information">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former
                NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
            </div>
        </sectio>
    )
}