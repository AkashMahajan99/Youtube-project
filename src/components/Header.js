import React from 'react'
import Hamlogo from "./assets/Hamburger.svg";
import Profile from "./assets/profile.svg";
import likedinlogo from './assets/linkedin.svg'
import Ytlogo from './assets/Logo_of_YouTube_(2015-2017).svg';
import Searchbar from './Searchbar';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../redux/sidebarVisiblilitySlice';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();


  return (
    <div className='flex w-100 h-[50px] p-2 justify-between shadow-md '>
       <div className=' flex'>
       <img 
       onClick={() => {
        dispatch(toggleSidebar())
    }} className='w-8 h-8 ml-3' src={Hamlogo} alt="hamlogo" />
    <Link to="/">
         <img className="mt-1 h-6 ml-3" src={Ytlogo} alt="video-icon" />
   </Link>

         </div>
       <Searchbar/>
       <div className='mx-2 flex '>
        <a href="https://www.linkedin.com/in/akash-mahajan-87b580134/" target="_blank">
                <img className="w-8 h-8 text-black-900 mx-4 cursor-pointer  "  src={likedinlogo} alt="linkedin" />
                </a>
                <img className="w-8 h-8 text-black-900 " src={Profile} alt="profile-icon" />
            </div>
    </div>
  )
}

export default Header