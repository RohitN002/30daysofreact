import React, { useState } from 'react'

const Day2 = () => {
const [visiblity , setVisiblity] = useState(true)
 const handleVisiblity = ()=>{
    setVisiblity(!visiblity)
 }   
return (
    <div>
      <h1>Day2</h1>
<button onClick={handleVisiblity}> click here  </button>
    {visiblity&& <p>hai</p>}
    </div>
  )
}

export default Day2