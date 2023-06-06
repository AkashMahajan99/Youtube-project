import React from 'react'

const Videocard = () => {
  return (
    <div className='p-2 w-80 rounded-lg'>
       <img className='w-80' src="https://i.pinimg.com/564x/f9/3e/1b/f93e1bf65a906060855a5184e6fe734f.jpg" alt="thumbanail" /> 
       <h2 className='font-semibold text-black px-1'>title</h2>
                <h3 className='px-1 text-gray-500 text-sm '>channel name</h3>
                <div className='flex justify-start gap-2 px-1 text-sm text-gray-500'>
                    <h3>video views</h3>
                    <h3>time since uploaded</h3>
                    </div>

    </div>
  )
}

export default Videocard