import React, { useState } from 'react'
const State=()=> {
  const [value, setvalue]=useState(0)
    return (
       <>
         <button onClick={()=>setvalue(value+1)}>onClick</button>
         <p>{value}</p>
     </>

    )
}



export default State