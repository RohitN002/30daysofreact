import React, { useState } from 'react'

const Day2 = () => {
const [visiblity , setVisiblity] = useState(true)
 const handleVisiblity = ()=>{
    setVisiblity(!visiblity)
 }   
return (
    <div>
<button onClick={handleVisiblity}> click here  </button>
    {visiblity&& <p>hai</p>}
    </div>
  )
}

export default Day2