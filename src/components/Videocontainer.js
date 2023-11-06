import React,{useEffect,useState} from 'react'
import Videocard from './Videocard'
import { VIDEO_LIST_URL } from '../utils/Constants';
import { Link } from 'react-router-dom';

const Videocontainer = () => {
  const [videos, setVideos] = useState([])
  
  useEffect(() =>{
    getVideos();
  },[]);
  const getVideos = async() =>{
    const data = await fetch(VIDEO_LIST_URL);
    const json = await data?.json();
    setVideos(json.items);
  };

  return (
    <div className=' mt-5 p-2 flex flex-wrap w-[calc(100vw-220px)] '>
         {videos?.map((video) => {
                return <Videocard key={video.id} video={video} />
            })}
    </div>
  )
}

export default Videocontainer