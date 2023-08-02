import React from 'react'

const Videoplayer = ({videoID}) => {
  return (
    <>
     <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${videoID}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" autoPlay allowFullScreen></iframe>
  </>
  )
}

export default Videoplayer