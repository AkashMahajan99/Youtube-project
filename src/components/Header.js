import React from 'react'
import Hamlogo from "./assets/Hamburger.svg";
import Ytlogo from './assets/Logo_of_YouTube_(2015-2017).svg';
import Searchbar from './Searchbar';
const Header = () => {
  return (
    <div className='flex w-100 h-[50px] p-2 justify-between shadow-md '>
       <div className=' flex'>
       <img className='w-8 h-8 ml-3' src={Hamlogo} alt="hamlogo" />
       <img className="mt-1 h-6 ml-3" src={Ytlogo} alt="video-icon" />

         </div>
       <Searchbar/>
       <div className='mx-2'>
                <img className="w-8 h-8 text-black-900" src={Hamlogo} alt="profile-icon" />
            </div>
    </div>
  )
}

export default Header