import React from 'react'
import cayLogo from '../assets/caylogo.jpg'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'



  



  export const Navbar =() =>{
  return (
    <div className='navbar'>
        <div className='main'>
                <img src={cayLogo} alt='...'/>
      
                      <div className='mainLink'>
                    <Link  to="/">Anasayfa </Link>
                    <Link to="/menü">Menü </Link>
                    <Link to="/about">Hakkımızda </Link>
                    <Link to="/contact">İletişim </Link>
                    </div>
                </div>
    </div>
  )
}

export default Navbar