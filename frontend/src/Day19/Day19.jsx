import React, { useState } from 'react'

const person = {
    name: "John Doe",
    age: 32,
    occupation: "Developer"
  };
  
  const address = {
    street: "1234 Main St",
    city: "San Francisco",
    state: "CA",
    zip: "94107"
  };
const Day19 = () => {
    const [tab,setTab] = useState('person')
    
    const handleClick =(click)=>{
        setTab(click)
    }
  return (
    <div><h1>Day 19</h1>
    <div onClick={()=>handleClick("person")} active={()=>tab("person")} >
<h3> Person</h3>
    </div>
    <div onClick={()=>handleClick("address")} active={()=>tab("address")}>
<h3>Address</h3>
</div>
{
 tab=="person"&&
  <div>
      <p>{person.name}</p>
      <p>{person.age}</p>
      <p>{person.occupation}</p>
      </div>
  
}
{
 tab=="address"&&
  <div>
      <p>{address.street}</p>
      <p>{address.city}</p>
      <p>{address.state}</p>
      <p>{address.zip}</p>
      </div>
  
}
  
  
    </div>
  )
}

export default Day19