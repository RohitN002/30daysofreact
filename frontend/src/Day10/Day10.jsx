import React, { useState } from 'react'

const Day10 = () => {
    const [text,setText]=useState('')

const handleChange=(event)=>{
    setText(event.target.value)
}

const textLength=text.length
  return (
    <div>
        <h1>Day 10 </h1>
        <textarea placeholder='typeHere'
        onChange={handleChange}
        value={text}
        ></textarea>
        <div>{textLength}</div>
    </div>
  )
}

export default Day10