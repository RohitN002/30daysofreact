import React, { useState } from 'react'

const Day3 = () => {
  const [start,setStart]=useState('')
  const [end,setEnd]=useState('')
  const [remdomnum,SetRandomNum]=useState(null)
  const[err,setErr]=useState('')

  const handlestartrange =(event)=>{
setStart(event.target.value)
  }
  const handleEndrange=(event)=>{
    setEnd(event.target.value)
  }
  const handleSubmit=()=>{
if()
  }
  return (
    <div>
        <input type="number" 
        value={start}
        onChange={handlestartrange}

        />
        <input type="number"
        value={end}
        onChange={handleEndrange} />

        <button onClick={handleSubmit}>Get Number</button>
        <div>
{remdomnum!=null&&remdomnum}
{err && <p>{err}</p>}
        </div>

    </div>
  )
}

export default Day3