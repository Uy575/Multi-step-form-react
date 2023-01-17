
function Formdetail({changeValue,value:{fname,lname,email},changeHandler}) {
 
   const onSubmit = e =>{
        e.preventDefault();
    }

  return (
    <>
     <form className='flex-col' onSubmit={onSubmit} >
      <h1>Form Detail</h1>
     <input onChange={changeHandler} type='text' placeholder='Enter First Name' name="fname" defaultValue={fname}></input>
     <input onChange={changeHandler} type='text' placeholder='Enter Last Name' name="lname" defaultValue={lname}></input>
     <input  onChange={changeHandler}type='email' placeholder='Enter Email' name="email" defaultValue={email}></input>
     <button onClick={()=>{
        if( fname && lname && email){
            changeValue(2)
        }
        else{
            alert('please fill all fields')
        }
     }}>Continue</button>
     </form>

    </>
  )
}

export default Formdetail