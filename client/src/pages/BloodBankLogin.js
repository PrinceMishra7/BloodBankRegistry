import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const BloodBankLogin = () => {

const [email,setemail]=useState("");
const [password,setpassword]=useState("");
const navigate=useNavigate();

console.log("email is ",email,password);

const handlesubmit=(e)=>{
    
navigate("/BloodIntake")
}
 




  return (
    <div className='bloodbank-container'>
      
      <div className='login-container'>
        <h1>Login</h1>
        <input type='email' placeholder='enter email...' onChange={(e)=>{setemail(e.target.value)}}></input> <br></br>
        <input type='password' placeholder='enter pasword...' onChange={(e)=>{setpassword(e.target.value)}}></input><br></br>
        <button type='submit' onClick={handlesubmit}>
        Login
        </button>
      </div>



    </div>
  )
}

export default BloodBankLogin
