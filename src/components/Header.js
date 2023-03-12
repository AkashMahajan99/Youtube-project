import React from 'react'
import Hamlogo from "./assets/Hamburger.svg"
const Header = () => {
  return (
    <div className='  flex '>
       <div className=''>
       <img src={Hamlogo} alt="" />
         </div>
       <div className=' '></div>
       <div className=' '> profile</div>
    </div>
  )
}

export default Header