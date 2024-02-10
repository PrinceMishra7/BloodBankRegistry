import React, { useEffect, useState } from 'react'
import {connectWallet,getDonorList,getBloodBankDetails} from '../config'
import { useNavigate } from 'react-router-dom';
const BankDashboard = () => {
    const [account,setAccount]=useState("");
    const [donors, setDonors] = useState([]);
    const navigate=useNavigate();
    const [name,setName]=useState('')
    const [location,setLocation]=useState('')
    const handleClick=(e)=>{
        e.preventDefault();
        navigate("/BloodIntake")
        // console.log("clicked");
    }

    
    useEffect(() => {

        async function getBloodBank(){
            try {
                const bloodBank=await getBloodBankDetails();
                console.log(bloodBank)
            } catch (error) {
                console.log(error.message);
            }
        }
        async function fetchData() {
            try {
              const donorList = await getDonorList();
              setDonors(donorList);
            } catch (error) {
              console.error('Error fetching donor list:', error);
            }
          }
      
          fetchData();
          getBloodBank();
        connectWallet().then((res)=>setAccount(res)); 

    }, [])
    
  return (
    <div>BankDashboard
        <button onClick={handleClick} >Blood Intake page</button>
        <h3>Account : {account}</h3>



        <div>
      <h1>Blood Bank Application</h1>
      <h2>Donor List</h2>
      {donors.map((donor, index) => (
        <div key={index}>
          <p>Name: {donor.name}</p>
          <p>Blood ID: {donor.bloodId}</p>
          <p>Batch No.: {donor.batchNo}</p>
          <p>Adhar Number: {donor.adharNumber}</p>
          <p>Blood Group: {donor.bloodGroup}</p>
          <p>Date of Donation: {new Date(donor.dateOfDonation * 1000).toLocaleString()}</p>
          <p>Status: {donor.isVerified ? 'Verified' : 'Not Verified'}</p>
          <hr />
        </div>
      ))}
    </div>


    </div>

  )
}

export default BankDashboard