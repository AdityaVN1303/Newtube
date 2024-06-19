import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { YT_API_KEY, YT_CHANNEL_URL, YT_PLAYLIST_URL } from '../utils/constants';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setChannelToken } from '../utils/videoSlice';
import InfiniteScroll from 'react-infinite-scroll-component';

const ChannelElement = () => {

    const [info, setInfo] = useState({});
    const [playlistId, setPlaylistId] = useState("");
    const [videos, setVideos] = useState([]);
    const {id} = useParams();
    const dispatch = useDispatch();
    const channelToken = useSelector((store)=>store.video.nextPageTokenForChannel);

    useEffect(() => {
      const getData = async ()=>{
        try {
            const channelData = await axios.get(YT_CHANNEL_URL , {
                params : {
                    part : 'snippet,contentDetails',
                    id : id,
                    key : YT_API_KEY,
                  }
            })
            console.log(channelData.data.items[0].contentDetails.relatedPlaylists.uploads);
            setPlaylistId(channelData.data.items[0].contentDetails.relatedPlaylists.uploads);
            setInfo(channelData.data.items[0].snippet);
        } catch (error) {
            console.log(error);
        }
      }
      getData();
    }, [id])

    const getVideos = async()=>{
        try {
        const video = await axios.get(YT_PLAYLIST_URL , {
            params : {
                part : 'contentDetails,snippet',
                playlistId : playlistId,
                maxResults : 30,
                type : 'video',
                pageToken : channelToken,
                key : YT_API_KEY
            }
        });
        setVideos([...videos ,  ...video.data.items]);
        // console.log(videos);
        dispatch(setChannelToken(video.data.nextPageToken));
        // console.log(videos.data.items);
    } catch (error) {
        console.log(error);
      }
      }

    useEffect(() => {
          getVideos();
    }, [playlistId])

    const fetchMoreData = ()=>{
            getVideos();
        
    }
    
    

  return (
    <div className="channel col-span-6">
       {info && <>
       <div className="header flex flex-col space-y-2 lg:flex-row justify-between items-center  mx-20">
           <div className="first flex flex-col space-y-2 lg:flex-row space-x-4 items-center">
           <LazyLoadImage src={info?.thumbnails?.medium?.url} className='rounded-full w-20 h-20 object-cover' title='channelLogo'/>
           <h1 className='font-semibold text-2xl'>{info?.title}</h1>
           </div>
           <button className='bg-red-700 text-white p-1 lg:p-3 rounded-md'>Subscribe</button>

        </div>
       </>}
       <div className="videos max-w-3xl mx-auto">
        <h1 className='my-5 font-bold text-2xl'>Videos</h1>
        <InfiniteScroll
        dataLength={videos.length}
        next={fetchMoreData}
        hasMore={!!channelToken}
        loader={<h4>Loading...</h4>}
        endMessage={ 
        <p style={{ textAlign: 'center' }}>
        <b>Yay! You have seen it all</b>
        </p>
        } 
        >
        <div className="videoList grid grid-cols-1 lg:grid-cols-3">
            {
                videos && videos.map((item)=>{
                    return <div key={item?.id}  className="card m-2 cursor-pointer">
                    {item && <Link to={`/watch/${item?.contentDetails?.videoId}`}>
                    <div className="relative">
                    <LazyLoadImage alt='img-banner' src={item?.snippet?.thumbnails?.medium?.url} className={`rounded-xl w-full`}  />
                    </div>
                    <div className="data mx-2">
                    <h1 className='font-semibold text-xl'>{item?.snippet?.title}</h1>
                    <div className="channel flex justify-start items-center space-x-2 my-2">
                    </div>
                    </div>
                    </Link>}
                </div>
                })
            }
        </div>
        </InfiniteScroll>
       </div>
    </div>
  )
}

export default ChannelElement