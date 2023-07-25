import React from 'react'

const Sidebar = () => {
  return (
    <div className=' w-[220px] h-full py-2 px-2 border-r-2 border-gray-500'>
    <ul>
        <li  >home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li> 
        <li>home</li>
        <li  >home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li> 
        <li>home</li>
        </ul>
    </div>
  )
}


export default function Sidebar() {
  const sidebarVisibility = useSelector((store) =>store.sidebarVisibility.value);
  return sidebarVisibility ?(
 
    <div className='w-[220px] h-full py-1 px-2 border-r-2 border-gray-100 '>
  {SIDEBAR_OPTIONS?.map((options, index) => {
        return <SidebarOption key={index} icon={options.icon} name={options.name} />
      })}
    </div>
  ):null
}
