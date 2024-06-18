import React, { useEffect, useState } from 'react'
import Player from './Player'
import Metadata from './Metadata'
import CommentSection from './CommentSection'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { GoDotFill } from 'react-icons/go'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { YT_API_KEY, YT_CATEGORY_URL, YT_DEFAULT_URL } from '../utils/constants'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Screen = () => {

    const [video, setVideo] = useState({});
    const [relatedVideos, setRelatedVideos] = useState([]);
    const tag = video?.snippet?.tags[0];

    const {id} = useParams();

    useEffect(() => {
        const getData = async ()=>{
            const data = await axios.get(YT_DEFAULT_URL , {
                params : {
                    part : 'snippet,contentDetails,statistics',
                    id : id,
                    key : YT_API_KEY
                }
            })
    
            // console.log(data.data);
            setVideo(data.data.items[0]);
    
        }
      getData();
    }, [id])

    useEffect(() => {
      const getRelatedVideos = async ()=>{
        try {
          const value = await axios.get(YT_CATEGORY_URL , {
            params : {
              part : 'snippet',
              q : tag,
              maxResults : 30,
              key : YT_API_KEY
            }
          })
          console.log(value.data.items);
          setRelatedVideos(value.data.items);
        } catch (error) {
          console.log(error);
        }
      }
      getRelatedVideos();
    }, [id])
    

  return (
    <div className="screen space-x-2 col-span-6 grid grid-cols-1 lg:grid-cols-3 px-5">
        {
            video && <>
            <div className="left col-span-1 lg:col-span-2">
            <Player id={video.id}/>
            <Metadata data={video}/>
            <CommentSection id={video.id}/>
            
        </div>
        <div className="right col-span-1">
            <h1 className='font-bold text-2xl m-2'>Up Next</h1>
            <div className="side-videos my-5">
                {
                  relatedVideos && relatedVideos.map((item)=>{
                    return <div key={item?.id?.videoId} className="mini-video">
                    <Link to={`/watch/${item?.id?.videoId ? item?.id?.videoId : item?.id}`}>
                    <div className="flex my-2 space-x-5">
                    <LazyLoadImage className='rounded-md w-2/5 h-32 object-cover' src={item?.snippet?.thumbnails?.medium?.url} title='side-img'/>
                    <div className="info">
        <h1 className='font-semibold text-base'>{item?.snippet?.title}</h1>
        <div className="video-info font-semibold flex justify-between items-center text-gray-500">
        <div className="info flex space-x-3 text-sm">
          <div className='flex space-x-1 items-center'><GoDotFill/> <p>{moment(item?.snippet?.publishedAt).fromNow()}</p></div>
        </div>
        </div>
        <div className="channel font-semibold text-gray-500">{item?.snippet?.channelTitle}</div>
                    </div>
                    </div>
                    </Link>
                    <hr />
                </div>
                  })
                }

            </div>
        </div>
            </>
        }
    </div>
  
)}

export default Screen