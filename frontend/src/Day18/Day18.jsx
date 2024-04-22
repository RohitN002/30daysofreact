import React, { useState } from 'react'

const Day18 = () => {
    const [loanAmount,setLoanAmount ]= useState('')
    const [tenue,setTenue] =useState('')
    const [emi,setEmi]=useState('')

    const setLoanChange=(event)=>{
setLoanAmount(event.target.value)
    }
    const setTenueChange=(event)=>{
        setTenue(event.target.value)
    }

    const calculateEMiValue=()=>{
        const loanamt = parseFloat(loanAmount)
        const tenuedetail = parseFloat(tenue)
        const value = loanamt/tenuedetail
        const finalVal = value.toFixed(2)
        setEmi(finalVal)
    }
  return (
    <div>
        <h1>Day 18 </h1>
        <input type="number"
        value={loanAmount}
        onChange={setLoanChange}
        placeholder='Type the loan amount' />
        <input type="number" 
        value={tenue}
        onChange={setTenueChange}
        placeholder='Enter Tenue in months' />
        <button onClick={calculateEMiValue}>Submit </button>
        <div> {emi}</div>
    </div>
  )
}

export default Day18