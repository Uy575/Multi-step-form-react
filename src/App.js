
import './App.css';
import { useState } from 'react';
import Formdetail from './Component/Formdetail';
import Personaldetail from "./Component/Personaldetail"
import Confirmation from "./Component/Confirmation"
import Success from "./Component/Success"

function App() {
  const [step,setStep] = useState(1)

  const initialValues = [{
    
    fname:'',
    lname:'',
    email:'',
    bio:'',
    occupation:'',
    city:''
  }]

  const [userinfo,setUserinfo] = useState(initialValues);
  const {fname,lname,email,bio,occupation,city} = userinfo;
  const values = {fname,lname,email,bio,occupation,city};
  
  const onChangeHandler = e =>{
      setUserinfo({...userinfo,[e.target.name]:e.target.value})
  }

  return (
    <div className="App">
         {(() => {
        switch (step) {
          case 1:
            return  <Formdetail changeHandler ={onChangeHandler} value = {values} changeValue =  {
              (value)=>{
                setStep(value)
              }
            }  />
          case 2:
            return <Personaldetail  changeHandler ={onChangeHandler} value = {values}  changeValue =  {
              (value)=>{
                setStep(value)
              }
            }/>
          case 3:
            return <Confirmation value = {values} changeValue =  {
              (value)=>{
                setStep(value)
              }
            }/>
          case 4:
            return <Success changeValue =  {
              (value)=>{
                setStep(value)
              }
            }/>
          default:
            return null
        }
      })()}
         
    </div>
  );
}

export default App;
