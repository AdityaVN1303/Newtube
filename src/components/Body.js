import React, { useEffect} from 'react'
import Filters from './Filters'
import VideoCard from './VideoCard'
import { YT_DEFAULT_URL , YT_API_KEY } from '../utils/constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {setToken, setVideos } from '../utils/videoSlice'
import InfiniteScroll from 'react-infinite-scroll-component'


const Body = () => {

  const dispatch = useDispatch();
  const videos = useSelector((store)=>store.video.videos);
  const token = useSelector((store)=>store.video.nextPageToken);
  const loading = useSelector((store)=>store.video.loading);

  const fetchVideos = async ()=>{
   try {
    // dispatch(setLoading(true));
    const data = await axios.get(YT_DEFAULT_URL , {
      params : {
        part : 'snippet,contentDetails,statistics',
         chart : 'mostPopular',
        maxResults : 25,
        key : YT_API_KEY,
        pageToken : token,
        regionCode : 'IN'
      }
    });
    console.log(data.data);
    dispatch(setVideos([...videos , ...data.data.items]));
    dispatch(setToken(data.data.nextPageToken));
    // dispatch(setLoading(false));
   } catch (error) {
    console.log(error);
   }
  }

  const fetchMoreData = ()=>{
    if (token) {
      fetchVideos();
    }
  }

  useEffect( ()=>{
    
    fetchVideos();
  } , [])
  

  return (
    <div className='col-span-6 box-border'>
        <Filters/>

        <InfiniteScroll
        dataLength={videos.length}
        next={fetchMoreData}
        hasMore={!!token}
        loader={<h4>Loading...</h4>}
        endMessage={ 
        <p style={{ textAlign: 'center' }}>
        <b>Yay! You have seen it all</b>
        </p>
        } 
        >
        { !loading ?
         <div className="cards grid lg:grid-cols-3 grid-cols-1 mt-10">
          {
            videos.map((item)=>{
              return <VideoCard data={item?.snippet} channel={item?.id?.kind === 'youtube#channel'} id={item?.id?.videoId ? item?.id?.videoId : item?.id} key={item?.id}/>
            }) 
          }
          </div> : <h1 className='font-bold text-4xl'>Loading...</h1>
          }
          </InfiniteScroll>

    </div>
  )
}

export default Body