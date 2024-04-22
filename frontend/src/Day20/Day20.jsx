import React, { useEffect, useState } from 'react'

const Day20 = () => {
    const [count , setCount]=useState(0)
    useEffect(()=>{
        console.log(`newcount:${count}`)
    })
  return (
    <div>
        <h1>Day 20 </h1>
<div>{count}</div>
<div>
<button onClick={()=>{
    
    setCount((prev)=>(prev+1))}}>Count</button>
    </div>
    </div>
  )
}

export default Day20