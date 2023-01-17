import React from 'react'

function Personaldetail({changeValue,value:{city,bio,occupation},changeHandler}) {
    const onSubmit = e =>{
        e.preventDefault();
    }

  return (
    <>
     <form className='flex-col' onSubmit={onSubmit} >
     <h1>Personal Detail</h1>
     <input onChange={changeHandler} type='text' placeholder='Enter city Name' name="city" defaultValue={city}></input>
     <input onChange={changeHandler} type='text' placeholder='Enter bio Name' name="bio" defaultValue={bio}></input>
     <input  onChange={changeHandler}type='email' placeholder='Enter occupation' name="occupation" defaultValue={occupation}></input>
    <button onClick={()=>{
         if( bio && city && occupation){
             changeValue(3)
        }
        else{
            alert('please fill all fields')
        }
    }}>Continue</button>
       <button onClick={()=>{
        changeValue(1)
    }} >Back</button>
    </form>

   </>
  )
}

export default Personaldetail