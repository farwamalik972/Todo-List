import React  from 'react'

 export const To = (props) => {

  return (
   
       <div className='to-style'>
       <div className='close'><ion-icon name="close-outline" onClick={()=>{
        props.onSelect(props.id);
       }}></ion-icon>
       </div>
        <li>{props.text}</li>
        </div>
    
  )
};


