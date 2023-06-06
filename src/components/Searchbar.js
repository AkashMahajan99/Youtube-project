import React from 'react'

const Searchbar = () => {
  return (
    <>
    <form action=""><input  className="placeholder:pl-3 placeholder-gray-500 border-2 rounded-l-3xl border-r-0 h-9 w-96 pl-3 "
                       
                        placeholder='Search' type="text" />
    <button className='border-2 rounded-r-3xl bg-gray-100 border-l-0 w-16 h-9'>search</button></form>
    </>
  )
}

export default Searchbar