import React, { useState } from 'react'

const Day4 = () => {
    const [principle,setPrinciple]=useState(1230)
    const [intrest,setIntrest]=useState(10)
 const [tenue,setTenue] =useState(4)

 const calculateSimpleIntrest =()=>{
    return (principle*intrest*tenue)/100
 }
 const handlePrincipleChange=(event)=>{
    setPrinciple(parseFloat(event.target.value) )
 }

 const handleIntrestChange=(event)=>{
    setIntrest(parseFloat(event.target.value) )
 }
 const handleTenueChange=(event)=>{
    setTenue(parseFloat(event.target.value) )
 }

 const finalIntrest = calculateSimpleIntrest()
 const totalAmount = calculateSimpleIntrest()+principle
    return (
    <div>
        <h1>Day4</h1>
       <div>
<div>
    <label htmlFor="principle">principle</label>
    <input type="number"
    value={principle}
    onChange={handlePrincipleChange}
    placeholder='enter principle amount'
    />
</div>
<div>
    <label htmlFor="intrest">intrest</label>
    <input type="number"
    value={intrest} 
    onChange={handleIntrestChange}
    placeholder='write intrest ratre'
    />
</div>
<div>
    <label htmlFor="tenue">tenue</label>
    <input type="number"
    value={tenue}
    onChange={handleTenueChange} />

</div>
<div>
    <label htmlFor="finalIntrest">Intrest Amount </label>
    <div>{finalIntrest} </div>
</div>
<div>
    <label htmlFor="totalAmount">Total Amont</label>
    <div>{totalAmount} </div>
</div>
       </div>
       
    </div>
  )
}

export default Day4