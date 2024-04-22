import React, { useState } from 'react'

const Day17 = () => {
    const [value,setValue] = useState(0)

    const handleDataClick=(index)=>{
setValue( index ===value ? -1:index)
    }
    const data =[
        {
            question:"question1",
            Answer :"Answer1"
        },
        {
            question:"question12",
            Answer :"Answer12"
        },
        {
            question:"question13",
            Answer :"Answer13"
        },
        {
            question:"question14",
            Answer :"Answer14"
        },
        {
            question:"question15",
            Answer :"Answer15"
        },

    ]
  return (
    <div><h1>Day 17</h1>
     {
        data.map((obj,index)=>(
            <div onClick={()=>handleDataClick(index)} key={index}>
                <h3>{obj.question}</h3>
                {value===index&& <p>{obj.Answer}</p>
                }
               
            </div>
        ))
     }
    </div>
  )
}

export default Day17