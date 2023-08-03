import React from 'react'

const Tag = ({ name }) => {
  return (
      <button className=' h-10 w-fit bg-gray-200  text-black px-3 py-1 mx-3 rounded-lg hover:bg-gray-600'>
          {name}
      </button>)
}
const Tagss = () => {
  return (
    <div className='flex ml-1 mt-5 overflow-scroll scrollbar-hide'>
    <button className=' h-10  bg-black text-white px-3 py-1 mx-3 rounded-lg'>
        Popular
    </button>
    <Tag name="Javascript" />
    <Tag name="Computer_Science" />
    <Tag name="Mixes" />
    <Tag name="Music" />
    <Tag name="Gaming" />
    <Tag name="News" />
    <Tag name="React" />
    <Tag name="Anime" />
    <Tag name="Movies" />
    <Tag name="Politics" />
    <Tag name="Hindi" />
    <Tag name="Marathi" />
    <Tag name="Trailers" />
</div>
)
}


export default Tagss