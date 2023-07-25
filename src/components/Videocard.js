import React from 'react'

const Videocard = ({info}) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails} = snippet;
  return (
    <div className='p-2 w-80 rounded-lg shadow-lg '>
       <img className='w-80 rounded-lg' src= {thumbnails.high.url} alt="thumbanail" /> 
       <h2 className='font-semibold text-black py-2 px-1'>{title}</h2>
                <h3 className='px-1 text-gray-500 text-sm '>{channelTitle}</h3>
                <div className='flex justify-start gap-2 px-1 text-sm text-gray-500'>
                     <h3>video views</h3>
                    <h3>time since uploaded</h3>
                    </div>

    </div>
  )
}

export default Videocard