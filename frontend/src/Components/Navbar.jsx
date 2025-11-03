import React from 'react'
// import './Navbar.css'
import Logo from './../../src/assets/Logo.png'
import { Link } from 'react-router-dom'
import cors from 'cors';

const Navbar = () => {
  return (
    <nav className="navbar-container w-full h-24 grid grid-cols-[10fr_1fr] place-items-center pl-32 bg-[#676f58] text-[#d4c7aa] box-border">
        <div className="navbar-content grid grid-cols-[5fr_1fr_5fr] place-items-center w-5/6">
          <div className="nav-items-container-1 w-1/2 flex justify-between items-center">
            <Link to={'/Home'}><div className="navbar-items">Home</div></Link>
            <Link to={'/AboutUs'}><div className="navbar-items">About us</div></Link>
          </div>
          <div className="nav-logo w-full h-full flex justify-center items-center">
            <Link to={'/Home'}><img src={Logo} className="" alt="Logo" /></Link>
            {/* <h1 className='web-name'>Meows and woofs</h1> */}
          </div>
          <div className="nav-items-container-2 w-1/2 flex justify-between items-center">
            <Link to={'/Adoption'}><div className="navbar-items">Adoption</div></Link>
            <Link to={'/Shop'}><div className="navbar-items">Shop now</div></Link> 
          </div>
        </div>
        <div className="nav-signin-btn flex justify-center items-center col-span-1">
          <Link to={'/Signup'}><button className="signin-btn border-2 border-[#d4c7aa] rounded-lg px-2 py-1 bg-transparent text-[#d4c7aa] hover:bg-[#d4c7aa] text-[#676f58]">Sign-in</button></Link>
        </div>
      
    </nav>
  )
}

export default Navbar