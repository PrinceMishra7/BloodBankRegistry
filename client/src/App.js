import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "./App.css";
import NavBar from './pages/NavBar';
import BloodBankLogin from './pages/BloodBankLogin';
import BloodIntake from './pages/BloodIntake';

const App = () => {
  return (
    <div>
      
      
      <div className='Main'>
        <BrowserRouter>

      <Routes>
        <Route path='/' element={<NavBar/>}></Route>
        <Route path='/BloodBankLogin' element={ <> <NavBar/> <BloodBankLogin/></>}></Route>
        <Route path='/BloodIntake' element={<BloodIntake/>}></Route>
      </Routes>
      </BrowserRouter>
      </div>


      <footer>
        footer

      </footer>
      
    </div>
  )
}

export default App
