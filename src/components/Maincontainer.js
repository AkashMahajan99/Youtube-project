import React from 'react'
import Videocontainer from './Videocontainer'
import Tagss from './Tagss'
import { useSelector } from 'react-redux'


const Maincontainer = () => {
    const sidebarVisibility = useSelector((store) => store.sidebarVisibility.value)
  return (
    <div className={sidebarVisibility ? `w-[calc(100vw-220px)]` : `w-[100vw] px-[100px]`}>
      <Tagss />
      <Videocontainer/></div>
  )
}

export default Maincontainer