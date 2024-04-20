import React, { useState } from 'react'

const Day1 = () => {
    const [number,setNumber]=useState(0)
  return (

    <div>
        <h1>Day1</h1>
        <h1>
            {number}
        </h1>
        <button onClick={
            ()=>{
                setNumber(number+3)
            }
        }> click</button>
    </div>
  )
}

export default Day1