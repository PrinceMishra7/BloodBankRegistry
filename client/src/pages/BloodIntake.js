import React from 'react'
import {  Link } from 'react-router-dom'


const BloodIntake = () => {
  return (
    <div className='Bloodbank-container'>
      <div className='header'>
        <h1>
        <Link to='BloodIntake' className='link'>BloodIntakePage</Link> 
      <Link to='#' className='link'>LogOut</Link>
        </h1>
      
      </div>

     

    </div>
  )
}

export default BloodIntake
