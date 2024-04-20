import React, { useState } from 'react'

const Day11 = () => {
    const [hover,sethover]=useState(0)
    const handleCount=()=>{
        sethover(hover+1)
    }
  return (
    <div><h1>Day 11</h1>
    <button onMouseEnter={handleCount} >Hover Me </button>
    <div>{hover}</div>
    </div>
  )
}

export default Day11