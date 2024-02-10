import React, { useState,useEffect } from 'react'
import { createbloodbank, connectWallet } from '../config'; 
import { useNavigate } from 'react-router-dom';
const BloodBankRegister = () => {

    const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [account,setAccount]=useState('');
  const navigate=useNavigate();
const handleClick=async(e)=>{
e.preventDefault();

try {
    await createbloodbank(name, location);
    alert('Blood bank created successfully!');
    // Reset form fields after successful creation
    setName('');
    setLocation('');
    navigate('/BloodBankLogin')
  } catch (error) {
    console.log(error.message);
  }

}
const getAddress=async()=>{
    connectWallet().then((res)=>setAccount(res)); 
}
 
  
  return (
    <div>
    <button onClick={getAddress}>Connect Wallet</button>
    Name: <input type="text" placeholder='enter name....' onChange={(e)=>setName(e.target.value)} />
    Location: <input type="text" placeholder='enter location....' onChange={(e)=>setLocation(e.target.value)} />
    <button onClick={handleClick} >Register</button>
    </div>
  )
}

export default BloodBankRegister