import React from 'react';

import markShuttleworth from '../img/crew/image-mark-shuttleworth.png';

export default function CrewSlider() {
    return (
        <sectio className="Slider-Item">
            <div className='Crew-MemberImage'>
                <img src={markShuttleworth} alt="crew-image" className='space-man' />
            </div>
            <div className='Crew-info'>
               <h2 className="member-job">Mission Specialist</h2>
               <h3 className="member-name">Mark Shuttleworth</h3>
               <p className="member-information">Mark Richard Shuttleworth is the founder and CEO of Canonical,
                the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
            </div>
        </sectio>
    )
}