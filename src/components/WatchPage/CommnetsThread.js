import React,{useEffect,useState} from 'react'
import { COMMENTS_THREAD_URL } from '../../utils/Constants'
import axios from 'axios';
import TopLevelComment from './TopLevelComment';
import CommentReply from './CommentReply';


const CommnetsThread = ({videoID}) => {

    const [commentThread, setCommentThread] = useState([]);
    const [visibleSection, setVisibleSection] = useState(null);

    useEffect(() =>{
      const fetchCommentsThread = (async () =>{
        const commentthreadResponse = await axios.get(COMMENTS_THREAD_URL + `&videoId=${videoID}`);
        setCommentThread(commentthreadResponse?.data?.items);
      })
      fetchCommentsThread();
    },[videoID])
    if (commentThread.length === 0 ){
      return(<>
        <h2 className='flex justify-center items-center mb-56'>Comments are turned off. <span className='font-semibold text-blue-700 ml-2'>Learn more</span></h2>
      </>)
    }
  return (
    <>
   {
    commentThread.map((item) =>{
      return(
        <div key={item.id}>
          <TopLevelComment 
           item={item}
           repliesQty={item?.replies?.comments?.length}
           visibleSection={visibleSection}
           setVisibleSection={setVisibleSection}
          />
           {
                visibleSection === item.id && item?.replies?.comments?.map((commentStructure) => {
                  return (
                    <CommentReply key={commentStructure?.snippet?.parentId + commentStructure?.snippet?.textOriginal}
                      commentStructure={commentStructure}
                    />
                  )
                })
              }
        </div>
      )
    })
   }
    </>
  )
}

export default CommnetsThread