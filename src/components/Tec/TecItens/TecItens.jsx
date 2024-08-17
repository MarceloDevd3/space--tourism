import React from 'react';

export default function TecItem(props) {
    return (
        <article className='slider-item'>
        <div className='slide-image-item'>
        <div className='full'></div>
           <img src={props.mobile} alt='image' className='full mobile' id={props.id} />
           <img src={props.desk} alt='image' className='full desk' id={props.id} />
        </div>
        <div className='card-content text-center '>
           <h2 className='card-content-title up--Text'>
The terminology... {props.name} </h2>
           <p className='card-content-text'>{props.description}</p>
        </div>
   </article>
    )
}