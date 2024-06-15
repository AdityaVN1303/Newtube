import React, { useEffect} from 'react'
import Filters from './Filters'
import VideoCard from './VideoCard'
import { YT_DEFAULT_URL , YT_API_KEY } from '../utils/constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setVideos } from '../utils/videoSlice'

const Body = () => {

  const dispatch = useDispatch();
  const videos = useSelector((store)=>store.video.videos);

  const fetchVideos = async ()=>{
    const data = await axios.get(YT_DEFAULT_URL , {
      params : {
        part : 'snippet,contentDetails,statistics',
        chart : 'mostPopular',
        maxResults : 25,
        key : YT_API_KEY
      }
    });
    dispatch(setVideos(data.data.items));
    // setVideos(data.data.items);
    console.log(data.data.items);

  }

  useEffect( ()=>{
    
    fetchVideos();
  } , [])
  

  return (
    <div className='col-span-6 box-border'>
        <Filters/>
        <div className="cards grid lg:grid-cols-3 grid-cols-1 mt-10">
          {
            videos && 
            videos.map((item)=>{
              return <VideoCard data={item?.snippet} id={item?.id?.videoId ? item?.id?.videoId : item?.id} key={item?.id}/>
            })
          }

        </div>
    </div>
  )
}

export default Body