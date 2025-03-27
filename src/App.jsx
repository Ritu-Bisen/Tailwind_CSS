import './index.css'
import React from 'react'
import NewVideo from './Components/NewVideo'
import Navbar from './Components/Navbar'
import Newbar from './Components/Newbar'
import Cart from './Components/Cart'
import CartNew from './Components/CartNew'
import Content from './Components/Content'
import { Route, Routes } from 'react-router-dom'
import Mart from './Components/Mart'
import Resturent from './Components/Resturent'
import Gym from './Components/Gym'
import Salon from './Components/Salon'
import SideBar from './Components/SideBar'
import WhyChooseUs from './Components/WhyChooseUs'
import CustomerReview from './Components/CustomerReview'
import HeroNew from './Components/HeroNew'
import Header from './Components/Header'
import OurServices from './Components/OurServices'


const App = () => {
  return (
    <div>
      {/* <Header/>
    <HeroNew/>
    <SideBar/> */}
      {/* <CartNew/>
      
    <Content/> 
    <div>
    <Routes>
        <Route path='/mart' element={<Mart/>}/>
        <Route path='/resturent' element={<Resturent/>}/>
        <Route path='/gym' element={<Gym/>}/>
        <Route path='/salon' element={<Salon/>} />
      </Routes>
    </div> */}

    {/* <SideBar/> */}
    {/* <WhyChooseUs/>  */}
{/* <CustomerReview/> */}
    
     {/* <Content/> */}

      <OurServices/>
    </div>
  )
}

export default App
