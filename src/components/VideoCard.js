import React from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

const VideoCard = () => {
  return (
    <div className="card m-2">
        <img src="https://i.ytimg.com/vi/Mos5QJAje28/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFbVeOdpHjPmjEkLBCOpvPJC5eMg" alt="coverImg" className='rounded-xl' />
        <div className="data mx-2">
        <h1 className='font-semibold text-xl'>Loki FInal Season Trailer You must wartch very awesome</h1>
        <div className="info flex space-x-3 text-blue-200">
          <div className='flex space-x-1 items-center'><IoEyeSharp/> <p>2.6M views</p></div>
          <div className='flex space-x-1 items-center'><GoDotFill/> <p>6 Days ago</p></div>
        </div>
        <div className="channel flex justify-start items-center space-x-2 my-2">
          <img src="https://yt3.ggpht.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s68-c-k-c0x00ffffff-no-rj" alt="logo" className='w-7 h-7 object-cover rounded-full' />
          <p className='text-blue-200'>Marvel Entertainment</p>
        </div>
        </div>
    </div>
  )
}

export default VideoCard