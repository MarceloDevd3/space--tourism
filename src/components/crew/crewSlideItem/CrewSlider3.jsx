import React from 'react';

import victorGlover from '../img/crew/image-victor-glover.png';

export default function CrewSlider() {
    return (
        <sectio className="Slider-Item">
            <div className='Crew-MemberImage'>
                <img src={victorGlover} alt="crew-image" className='space-man' />
            </div>
            <div className='Crew-info'>
               <h2 className="member-job">Pilot</h2>
               <h3 className="member-name">Victor Glover</h3>
               <p className="member-information">Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. 
               Glover is a commander in the U.S. Navy where he pilots an
                F/A-18.He was a crew member of Expedition 64, and served as a station 
                systems flight engineer.</p>
            </div>
        </sectio>
    )
}