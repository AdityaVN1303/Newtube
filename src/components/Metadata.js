import React, { useEffect, useState} from 'react'
import { IoEyeSharp } from 'react-icons/io5'
import { GoDotFill } from 'react-icons/go'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { AiFillDislike, AiFillLike } from 'react-icons/ai'
import numeral from 'numeral'
import moment from 'moment'
import axios from 'axios'
import { YT_API_KEY, YT_CHANNEL_URL} from '../utils/constants'
// import { useSelector } from 'react-redux'

const Metadata = ({data}) => {

  const [channel, setChannel] = useState({});
  // const token = useSelector((store)=>store.auth.accessToken);
  // console.log(token);

  useEffect(() => {
    const getData = async ()=>{
      try {
        const value = await axios.get(YT_CHANNEL_URL , {
          params : {
            part : 'snippet,contentDetails,statistics',
            id : data.snippet.channelId,
            key : YT_API_KEY
          }
        })
        console.log(value.data.items[0]);
        setChannel(value.data.items[0]);
      } catch (error) {
        console.log(error);
      }
    }
    getData();

  }, [data])
  

  // useEffect(() => {
  //   const getSubscriptionData = async ()=>{
  //     try {
  //       console.log(token);
  //       const value = await axios.get(YT_SUBSCRIPTION_URL , {
  //         params : {
  //           part : 'snippet,contentDetails',
  //           forChannelId : data.snippet.channelId,
  //           mine : true,
  //           key : YT_API_KEY,
  //         },
  //         headers : {
  //           Authorization : `Bearer ${token}`
  //         }
  //       })
  //       console.log(value);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getSubscriptionData();

  // }, [data])
  

  const viewCount = data?.statistics?.viewCount;
  const likeCount = data?.statistics?.likeCount;


  return (
    <div className="meta mt-5 space-y-1">
      <div className="up">
        <h1 className='font-semibold text-xl mb-2'>{data?.snippet?.localized?.title}</h1>
        <div className="video-info flex justify-between items-center">
        <div className="info flex space-x-3 text-sm">
          <div className='flex space-x-1 items-center'><IoEyeSharp/> <p>{numeral(viewCount).format('0.a')} Views</p></div>
          <div className='flex space-x-1 items-center'><GoDotFill/> <p>{moment(data?.snippet?.publishedAt).fromNow()}</p></div>
        </div>
        <div className="likes text-base space-x-2 flex justify-between items-center">
        <div className='flex justify-between items-center'>
        <AiFillLike />
        {numeral(likeCount).format('0.a')}
        </div>
        <AiFillDislike/>

        </div>
        </div>
      </div>
      <hr />
      <div className="middle flex justify-between items-center">
      <div className="channel flex justify-start items-center space-x-2 my-2">
          <LazyLoadImage alt='img-banner' src={channel?.snippet?.thumbnails?.medium?.url} className='w-10 h-10 object-cover rounded-full'  />
          <div className="channelInfo text-sm">
          <p className='font-semibold'>{data?.snippet?.channelTitle}</p>
            <p className='Subscriber-count'>{numeral(channel?.statistics?.subscriberCount).format('0.a')} Subscribers</p>
          </div>
        </div>
        <button className='bg-red-600 h-2/3 text-white p-1 rounded-sm'>Subscribe</button>
      </div>
      <hr />
      <div className="down text-sm">
        <p>
        {data?.snippet?.localized?.description}
        </p>
      </div>
      <hr />
    </div>
  )
}

export default Metadata