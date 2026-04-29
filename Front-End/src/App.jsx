import React, { useContext } from 'react'
import { Route,Routes } from 'react-router-dom'
import Start from './pages/Home'
import Userlogin from './pages/Userlogin'
import Usersignup from './pages/Usersignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'
import { UserDatacontext } from './Context/Usercontext'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout '
import Demo from './pages/DEMO'
import Services from './pages/Services'
import HowItWorks from './pages/HowItWorks'
import WhyChooseUs from './pages/WhyChooseUs'
import FutureRide from './pages/FutureRide'
import CaptainPage from './pages/CaptainPage';
import BookingPage from './pages/BookRide';
import VehicleSelect from './pages/VehicleSelect';


function App() {
  const ans = useContext(UserDatacontext);
  
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home/>} />
        
        <Route path='/Userlogin' element={ <Userlogin/>} />
        <Route path='/Usersignup' element={ <Usersignup/>} />
        <Route path='/captainlogin' element={ <Captainlogin/>} />
        <Route path='/Captainsignup' element={ <Captainsignup/>} />
        <Route path='/demo' element={ <Demo/>} />
        <Route path='/services' element={ <Services/> } />
        <Route path='/how-it-works' element={ <HowItWorks/> } />
        
        <Route path='/future-ride' element={ <FutureRide/> } />
        <Route path='/booking' element={ <BookingPage /> } /> 
        <Route path='/vehicle-select' element={ <VehicleSelect /> } /> 
        <Route path='/captain-home' element={
          <UserProtectedWrapper>
            <CaptainPage />
          </UserProtectedWrapper>
        } />
         <Route path='/user/logout' element={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        } />
      </Routes>
      
      
    
    </div>
  )
}

export default App