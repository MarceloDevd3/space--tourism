import React, {useId} from 'react';


export default informationItem = (props) => {

    const id = useId()
      return (
         <>
            <article className='destinations-info'>
               <img src={props.img} alt="planet"  id={id}/>
            </article>
         </>
      )
}