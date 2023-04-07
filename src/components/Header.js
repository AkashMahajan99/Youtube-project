import React from 'react'
import Hamburger from './assets/hamburger.svg'
const Header = () => {
  return (
    <div className=' p-1 flex justify-between'>
       <div className=' text-emerald-500 border-l-black bg-cyan-400 mx-5'>
        <img src={Hamburger} alt="hamburgericon" />
         </div>
       <div className=' mx-10  bg-red-700'><input type="text" /></div>
       <div className=' bg-yellow-400'> profile</div>
    </div>
  )
}

export default Header