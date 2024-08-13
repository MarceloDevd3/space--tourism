import React from 'react';
export default function CrewSliderBase(props) {
    return (
        <sectio className="Slider-Item">
            <div className='Crew-MemberImage'>
                <img src={props.CrewImg} alt="crew-image" className={props.classes} />
            </div>
            <div className='Crew-info text-center '>
               <h2 className="member-job up--Text">{props.job}</h2>
               <h3 className="member-name up--Text">{props.name}</h3>
               <p className="member-information">{props.info}</p>
            </div>
        </sectio>
    )
}