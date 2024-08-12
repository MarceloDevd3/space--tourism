import React from 'react';

export default function TecItem(props) {
    return (
        <article className='slider-item'>
        <div className='slide-image-item'>
           <img src={props.img} alt='image' className='full' id={props.id} />
        </div>
        <div className='card-content'>
           <h2 className='card-content-title'>
The terminology... {props.name} </h2>
           <p className='card-content-text'>{props.description}</p>
        </div>
   </article>
    )
}