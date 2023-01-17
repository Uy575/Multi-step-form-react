import React from 'react'

function Confirmation({changeValue,value:{fname,lname,email,city,bio,occupation}}) {
  return (
    <>
    <div className='center'>
    <h3>Your name <br/> {fname} {lname}</h3>
    <h3>Your email <br/> {email}</h3>
    <h3>Your city <br/> {city}</h3>
    <h3>Your occupation <br/> {occupation}</h3>
    <h3>Your bio <br/> {bio}</h3>
    <button onClick={()=>{
        changeValue(4)
    }}>Confirm</button>
    <button onClick={()=>{
        changeValue(2)
    }}>Back</button>
    </div>
    </>
  )
}

export default Confirmation