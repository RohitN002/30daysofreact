import React, { useState } from 'react'

const Day5 = () => {
    const [value,setValue]=useState({
        option1:0,
        option2:0,
        option3:0,
        option4:0
    })
    const handleClick =(option)=>{
setValue(prevVal=>({
    ...prevVal,
    [option]:prevVal[option]+1
}))
    }
  return (
    <div>
        <div>
            <h1> Day5</h1>
            <h4 id="question" className="text-lg font-bold mb-4">What is your favorite color?</h4>

            <button onClick={()=>handleClick('option1')}>
                <span>Blue</span>
                <span>{value.option1}</span>
            </button>
           
            <button onClick={()=>handleClick('option2')}>
                <span>green</span>
                <span>{value.option2}</span>
            </button>
            <button onClick={()=>handleClick('option3')}>
                <span>white</span>
                <span>{value.option3}</span>
            </button>
            <button onClick={()=>handleClick('option4')}>
                <span>red</span>
                <span>{value.option4}</span>
            </button>
        </div>
    </div>
  )
}

export default Day5