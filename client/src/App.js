import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "./App.css";
import NavBar from './pages/NavBar';
import BloodBankLogin from './pages/BloodBankLogin';
import BloodIntake from './pages/BloodIntake';
import BankDashboard from './pages/BankDashboard';
import BloodBankRegister from './pages/BloodBankRegister';
const App = () => {
  return (
    <div>
      
      
      <div className='Main'>
        <BrowserRouter>

      <Routes>
        <Route path='/' element={<NavBar/>}></Route>
        <Route path='/BloodBankLogin' element={ <> <NavBar/> <BloodBankLogin/></>}></Route>
        <Route path='/BloodIntake' element={<BloodIntake/>}></Route>
        <Route path='/BankDashboard' element={<BankDashboard/>}></Route>
        <Route path='/Register' element={<BloodBankRegister/>}></Route>
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
