import React, { useMemo, useState } from 'react'

function Memo() {
  const[count,Setcount]=useState(0)
  const[item,setitem]=useState(10)
  const Multi=useMemo(  function Multimedia(){
  console.warn(Multimedia)
  return count*5
},[count])
  return (
    <div>
      <h2>UseMemo Hock in React</h2>
      <h3>count:{count}</h3>
      <h3>Item:{item}</h3>
      <h3>{Multi}</h3>
      <button onClick={()=>Setcount(count+1)}>Update button</button>
      <button onClick={()=>setitem(count*10)}>Updateitem</button>
     
    </div>
  )
}

export default Memo
