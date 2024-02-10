import React from 'react';
import facebook from '../../images/facebook.jpg'
import insta from '../../images/insta.jpg'
import twitter from '../../images/twitter.jpg'
import './Navbar.css'
//import {Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='navbar-container'>
      
        <h1>
      <a href='#'>Track</a>
      <a href='/BloodBankLogin'>Login As Hospital</a>
      <a href='#'>Login As BloodBank</a>
      </h1>
      <ul>
        <li> <img src={facebook}></img></li>
        <li> <img src={insta}></img></li>
        <li> <img src={twitter}></img></li>
        </ul>
    </div>
  )
}

export default Navbar
