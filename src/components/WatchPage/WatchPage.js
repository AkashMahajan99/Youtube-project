import React, { useEffect ,useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { closeSidebar } from '../../redux/sidebarVisiblilitySlice';
import { useSearchParams } from 'react-router-dom/dist';
import Videoplayer from './VideoPlayer';
import LiveChat from './LiveChat';
import VideoInfo from './VideoInfo';
import SuggestionVideoCard from './SuggestionVideoCard';
import CommnetsThread from './CommnetsThread';
import { VIDEO_LIST_URL } from '../../utils/Constants';


const WatchPage = () => {


   const [searchParams] =useSearchParams();
   const videoID = searchParams.get("v");
  const dispatch = useDispatch();
  const [videoList, setVideoList] = useState([]);
  useEffect(() =>{
    dispatch(closeSidebar())
  },[dispatch]);

  useEffect(() => {
    const fetchVideoList = async () => {
      const res = await axios.get(VIDEO_LIST_URL);
      setVideoList(res.data.items);
    }
    fetchVideoList();
  }, [])

  return (
    <div className='flex flex-col w-[85%] mx-auto items-center'>
      <div className='flex flex-row m-5 mt-8 mb-0 h-[70vh] w-full justify-between'>
       <div className='flex flex-col w-[70%] h-[500px]'>
        <Videoplayer videoID={videoID}/>
       </div>
       <div className="w-[30%] ml-5 border-2 border-gray-300 rounded-lg overflow-y-hidden overflow-x-hidden">
          <LiveChat />
        </div>

      </div>
      <div className='flex flex-row m-5 h-[45vh] w-full justify-between'>
        <div className='flex flex-col w-[70%]'>
          <VideoInfo/>
        </div>
        <div className='w-[30%]'>
        <div className=' ml-5'>
        {videoList.map((video) => {
              return <SuggestionVideoCard key={video.id} video={video} />
            })}
        </div>
        </div>
      </div>
      <div className='flex flex-row h-[70vh] w-full justify-between'>
        <div className='w-[70%]'>
          <CommnetsThread videoID={videoID }/>
        </div>
      </div>
    </div>
  )
}

export default WatchPage