import React, { useEffect, useState } from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import axios from 'axios';
import { YT_API_KEY, YT_CHANNEL_URL, YT_DEFAULT_URL} from '../utils/constants';
import moment from 'moment';
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const VideoCard = ({data , id , channel}) => {

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelImg, setchannelImg] = useState("");

  const seconds = moment.duration(duration).asSeconds();
  const time = moment.utc(seconds * 1000).format("mm:ss");

  useEffect(() => {
    
    const getStats = async ()=>{
      try {
        const values = await axios.get(YT_DEFAULT_URL , {
          params : {
            part : 'contentDetails,statistics',
            id : id ,
            key : YT_API_KEY
          }
        })
        setDuration(values.data.items[0].contentDetails.duration);
        // console.log();
        setViews(values.data.items[0].statistics.viewCount);
      } catch (error) {
        console.log(error);
      }
    }
    getStats();
  }, [id])

  useEffect(() => {
    
    const getChannelStats = async ()=>{
      try {
        const values = await axios.get(YT_CHANNEL_URL , {
          params : {
            part : 'snippet',
            id : data.channelId,
            key : YT_API_KEY
          }
        })
        // console.log(values);
        setchannelImg(values.data.items[0].snippet.thumbnails.medium.url);
      } catch (error) {
        console.log(error);
      }
    }
    getChannelStats();
  }, [id])
  

  return (
    <div  className="card m-2 cursor-pointer">
        {data && <Link to={channel ? `/channel/${data?.channelId}` : `/watch/${id}`}>
        <div className="relative">
        <LazyLoadImage title='img-banner' src={data?.thumbnails?.medium?.url} className={`${channel ? 'rounded-full h-56 w-56 mx-auto' : 'rounded-xl'} w-full`}  />
        <div className="time bg-black text-white p-1 px-3 absolute bottom-0 right-0">{!channel && time}</div>
        </div>
        <div className="data mx-2">
        <h1 className='font-semibold text-xl'>{data?.title}</h1>
        <div className="info flex space-x-3 text-blue-600">
          {!channel && <div className='flex space-x-1 items-center'><IoEyeSharp/> <p>{numeral(views).format('0.a')} Views</p></div>}
          {!channel && <div className='flex space-x-1 items-center'><GoDotFill/> <p>{moment(data?.publishedAt).fromNow()}</p></div>}
        </div>
        <div className="channel flex justify-start items-center space-x-2 my-2">
          <LazyLoadImage title='img-banner' src={channelImg} className='w-7 h-7 object-cover rounded-full'  />
          <p className='text-blue-600'>{data?.channelTitle}</p>
        </div>
        </div>
        </Link>}
    </div>
  )
}

export default VideoCard