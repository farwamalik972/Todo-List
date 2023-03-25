import React, { useEffect,useState } from 'react'
function Hocks() {
    const[setcount,setdata]=useState(0)
   useEffect(()=>{
    })
  return (
    <div> 
      <h2>UseEffect Hocks {setcount}</h2>
      <button onClick={()=>setdata(setcount+1)}>Update</button>
    </div>
  )
}

export default Hocks

